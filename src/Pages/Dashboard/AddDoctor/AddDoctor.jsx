import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const specialty = useLoaderData();

    const handleSignUp = data => {
        console.log('data', data);
    };

    return (
        <div>
            <h2 className='text-3xl font-bold text-green-600 underline uppercase'>_ Add A Doctor _</h2>

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
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Specialty</span>
                    </label>
                    <select
                        {...register("specialty", { required: "Specialty is required" })}
                        className="select select-primary w-full max-w-xs"
                    >
                        {
                            specialty.map(special => <option
                                key={special._id}
                            >{special.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-lg">Photo</span>
                    </label>
                    <input
                        type="file"
                        {...register("image", { required: "Image is required" })}
                        className="input input-bordered w-full"
                    />
                    {
                        errors.image && <p className='text-red-600'>{errors.image?.message}</p>
                    }
                </div>

                <input type="submit" value='Add A Doctor' className="btn btn-accent w-full text-white mt-3" />
            </form>
        </div>
    );
};

export default AddDoctor;