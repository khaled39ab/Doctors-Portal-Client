import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Pages/Shared/Loading/Loading';
import useAdmin from '../../hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    const { user, isLoading, logOut } = useContext(AuthContext);
    const [admin, setAdminLoading] = useAdmin(user);
    const location = useLocation();

    if (isLoading || setAdminLoading) {
        return <Loading />
    }

    if (!user || !admin) {
        logOut();
        return <Navigate to={'/'} state={{ from: location }} replace />
    }

    return children;
};

export default RequireAdmin;