import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginUser } = useContext(AuthContext);


    const handleLogin = data => {
        console.log(data);
        loginUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    };
    

    return (
        <div className='h-[500px] flex justify-center items-center my-16'>
            <div className='w-96 p-7 shadow-xl'>
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
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
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