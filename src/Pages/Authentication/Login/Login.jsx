import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");


    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className=''>
                <h2 className='text-3xl font-semibold text-center mb-5'>Login</h2>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
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
                    </div>
                    <br />
                    <input type="submit" className="btn btn-accent w-full" />
                </form>
            </div>
        </div>
    );
};

export default Login;