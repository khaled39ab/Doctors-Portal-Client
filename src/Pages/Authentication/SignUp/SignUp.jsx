import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = data => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(res => {
                // const user = res.user;
                // console.log(user);
            })
            .catch(err => {
                setSignUpError(err.message)
            })
    }


    return (
        <div className='h-[600px] flex justify-center items-center my-16'>
            <div className='w-96 p-7 shadow-xl'>
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
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;