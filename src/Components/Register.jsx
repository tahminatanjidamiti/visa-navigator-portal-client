import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from './provider/AuthProvider';

const Register = () => {
    const {createNewUser, setUser, updateUserProfile, handleGoogleLogin} = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        //get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        // console.log({name, photo, email,  password });
        if(!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)){
            toast.error("Password invalid!");
            return;
        }
        createNewUser(email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            updateUserProfile({displayName: name, photoURL: photo})
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                // console.log(err);
            })
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode, errorMessage);
        })
        
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
            <h2 className='text-2xl font-semibold text-center'>Register your account</h2>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" 
                    name="name" placeholder="name" className="input input-bordered" required />
                </div>
                {
                    error.name && (
                        <label className="label text-xs text-rose-500">
                        {error.name}
                    </label>
                    )
                }
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" 
                    name="photo" placeholder="photo-url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" 
                    name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" 
                    name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <Link to="/" className="btn bg-teal-400 rounded-none text-white font-bold">Register</Link>
                </div>
            </form>
            <button className='flex justify-center items-center mb-2 text-3xl' onClick={handleGoogleLogin}><FcGoogle /></button>
            <p className='text-center font-semibold'>Already Have An Account ? <Link className="text-teal-500" to="/login">Login</Link></p>
        </div>
    </div>
    );
};

export default Register;