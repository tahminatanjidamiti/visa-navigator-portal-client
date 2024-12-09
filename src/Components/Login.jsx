import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FcGoogle } from "react-icons/fc";
import { AuthContext } from './provider/AuthProvider';

const Login = () => {
    const { userLogin, setUser, handleGoogleLogin } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        
        userLogin(email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state : "/");
        })
        .catch(err => {
            setError({ ...error, login: err.code })
        })
            
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            name="password" placeholder="password" className="input input-bordered" required />
                        {
                            error.login && (
                                <label className="label text-sm text-teal-600">
                                    {error.login}
                                </label>
                            )
                        }
                        <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-teal-400 text-white rounded-none font-bold">Login</button>
                    </div>
                </form>
                <button className='flex justify-center items-center mb-2 text-3xl' onClick={handleGoogleLogin}><FcGoogle /></button>
                <p className='text-center font-semibold'>Dont’t Have An Account ? <Link className="text-teal-500" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;