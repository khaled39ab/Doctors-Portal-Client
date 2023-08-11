import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <div class="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <div class="flex justify-center">
            <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    }

    if (!user) {
        return <Navigate to={'/signIn'} state={{ from: location }} replace />
    }

    return children;
};

export default RequireAuth;