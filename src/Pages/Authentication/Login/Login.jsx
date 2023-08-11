import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import authBg from '../../../assets/images/backgroundAuth.jpg';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginUser, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleLogin = data => {
        setLoginError('')
        loginUser(data.email, data.password)
            .then(res => {
                // const user = res.user;
                // console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                setLoginError(err.message);
            })
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                // console.log(res.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoginError(err.message)
            })
    }


    return (
        <div
            style={{
                background: `url(${authBg})`
            }}
            className='h-[700px] flex justify-center items-center my-16'
        >
            <div className='w-96 p-7 shadow-xl bg-slate-50 rounded-md'>
                <h2 className='text-3xl font-semibold text-center mb-5'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "Email Address is required" })}
                            placeholder="Enter Your Email"
                            className="input input-bordered w-full"
                        />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            placeholder="Enter Your Password"
                            className="input input-bordered w-full"
                        />
                        {
                            errors.password && <p className='text-red-600'>{errors.password?.message}</p>
                        }
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                        <label className="label">
                            <span className="label-text-alt cursor-pointer underline">Forget Password?</span>
                        </label>
                    </div>
                    <input type="submit" value='Login' className="btn btn-accent w-full text-white mt-3" />
                </form>
                <p className='text-base mt-3 text-center'>New to Doctors Portal? <Link className='text-secondary' to={'/signUp'}>Create new account</Link> </p>

                <div>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;