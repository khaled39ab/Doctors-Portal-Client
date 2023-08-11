import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Pages/Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to={'/signIn'} state={{ from: location }} replace />
    }

    return children;
};

export default RequireAuth;