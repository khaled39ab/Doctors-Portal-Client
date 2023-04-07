import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-xl'>
                <h2 className='text-3xl font-semibold text-center mb-5'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="Enter Your Email" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="Enter Your Password" className="input input-bordered w-full" />
                        <label className="label">
                            <span className="label-text-alt cursor-pointer underline">Forget Password?</span>
                        </label>
                    </div>
                    <input type="submit" value='Login' className="btn btn-accent w-full text-white mt-3" />
                </form>
                <p className='text-base mt-3 text-center'>New to Doctors Portal? <Link className='text-secondary' to={'/signUp'}>Create new account</Link> </p>

                <div>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;