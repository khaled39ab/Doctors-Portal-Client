import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';

const GoogleLogin = () => {
    const { user, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const token = useToken(user);

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                // console.log(res.user)
                if (token) {
                    navigate(from, { replace: true });
                }
            })
            .catch(err => {
                setLoginError(err.message)
            })
    }

    return (
        <div>
            {
                loginError && <p className='text-red-600'>{loginError}</p>
            }
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>Continue With Google</button>
        </div>
    );
};

export default GoogleLogin;