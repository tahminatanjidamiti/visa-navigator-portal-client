import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';

const Navbar = ({ handleThemeToggle, isDark }) => {
    const {user, logOut} = useContext(AuthContext);
    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/all_visas">All Visas</NavLink>
        <NavLink to="/add_visa">Add Visa</NavLink>
        <NavLink to={`/my_added_visas/${user?.email}`}>My Added Visa</NavLink>
        <NavLink to={`/my_visa_application/${user?.email}`}>My Visa Application</NavLink>
    </>
    return (
        <div className='sticky top-0 z-50 backdrop-blur-sm bg-sky-400 bg-opacity-20 py-4'>
            <div className="navbar w-11/12 mx-auto text-black bg-sky-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img className='w-12 bg-red-300 p-1 border border-red-600 h-12 rounded-full' src="https://i.ibb.co.com/gR1HB3r/b3911f0ada11434d96775446260a3d6e.jpg" alt="Logo picture coming soon!" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                        user && user?.email ? (<><img className='w-10 h-10 rounded-full' src={user?.photoURL} title={user?.displayName} alt="User picture!" /><button onClick={logOut} className='btn bg-teal-400 text-white rounded-xl ml-1'>Log-Out</button> </>) : (<><Link to="/login" className='btn bg-teal-400 rounded-xl text-white'>Login</Link> <Link to="/register" className='btn bg-teal-400 rounded-lg ml-2 text-white'>Register</Link></>)
                    }
                </div>
            </div>
            <div className='flex justify-end w-11/12 mt-5'>
                <label className="flex cursor-pointer gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    {/* Theme Toggle */}
                    <input
                        type="checkbox"
                        value="synthwave"
                        className="toggle theme-controller"
                        checked={isDark}
                        onChange={handleThemeToggle}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;