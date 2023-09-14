import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const specialty = useLoaderData();

    const doctorURl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageStorageAPI}`;

    const handleSignUp = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);

        fetch(doctorURl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // console.log(doctor);
                    // console.log(JSON.stringify(doctor));
                    fetch('http://localhost:4000/doctors', {
                        method: 'POST',
                        'content-type': 'application/json',
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log(inserted);
                            if (inserted.acknowledged) {
                                toast.success('Successfully add a doctor')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Doctor')
                            }
                        })
                }
            })
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
                        className="select input-bordered w-full max-w-xs"
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