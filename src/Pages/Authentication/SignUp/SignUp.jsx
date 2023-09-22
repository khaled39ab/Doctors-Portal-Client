import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import authBg from '../../../assets/images/backgroundAuth.jpg';
import GoogleLogin from '../SocialLogin/GoogleLogin';
import useToken from '../../../hooks/useToken';
import { toast } from 'react-hot-toast';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, addUserName, user } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // const [createdUser, setCreatedUser] = useState('');
    const [token] = useToken(user);


    if (token) {
        navigate(from, { replace: true });
    };

    
    const handleSignUp = data => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(res => {
                addUserName(data.name)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch((err) => { console.log(err); })
                // const user = res.user;
                // console.log(user);
                toast.success('User Created Successfully')
                
            })
            .catch(err => {
                setSignUpError(err.message)
            })
    };

    const saveUser = (name, email) => {
        const user = { name, email }

        fetch(`https://doctors-portal-server1.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // setCreatedUser(email)
            })
    };


    return (
        <div
            style={{
                background: `url(${authBg})`
            }}
            className='h-[700px] flex justify-center items-center my-16 '
        >
            <div className='w-96 p-7 shadow-xl bg-slate-50 rounded-md'>
                <h2 className='text-3xl font-semibold text-center mb-5'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            placeholder="Enter Your Name"
                            className="input input-bordered w-full"
                        />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
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
                        {
                            errors.email && <p className='text-red-600'>{errors.email?.message}</p>
                        }
                        {
                            signUpError && <p className='text-red-600'>{signUpError}</p>
                        }
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
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text-alt cursor-pointer underline">Forget Password?</span>
                        </label>
                    </div>
                    <input type="submit" value='Sign Up' className="btn btn-accent w-full text-white mt-3" />
                </form>
                <p className='text-base mt-3 text-center'>Already Have an account? <Link className='text-secondary' to={'/login'}>Login</Link> </p>

                <div>
                    <GoogleLogin />
                </div>
            </div>
        </div>
    );
};

export default SignUp;