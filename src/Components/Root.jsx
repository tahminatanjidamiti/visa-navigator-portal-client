import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import { AuthContext } from './provider/AuthProvider';

const Root = () => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const email = user;
        useEffect(() => {
            const pathSelect = {
                '/': 'Home',
                '/all_visas': 'All Visas',
                '/add_visa': 'Add Visa',
                ...(user?.email && {
                    [`/my_added_visas/${user.email}`]: 'My Added Visa',
                [`/my_visa_application/${user.email}`]: 'My Visa Application',
                }),
                
            }
            const pageTitle = pathSelect[location.pathname] || 'Home';
            document.title = `NaVisa | ${pageTitle}`;
        }, [location, user?.email]);
        const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            setIsDark(false);
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

    // Toggle the theme//
    const handleThemeToggle = () => {
        setIsDark((prev) => {
            const newTheme = !prev ? 'dark' : 'light';
            // Update the theme in localStorage//
            localStorage.setItem('theme', newTheme);
            // Set the theme to the root element (html or body)//
            document.documentElement.setAttribute('data-theme', newTheme);
            return !prev;
        });
    };
    
    return (
        <div>
            <Navbar handleThemeToggle={handleThemeToggle} isDark={isDark}></Navbar>
            <div className='min-h-[calc(100vh-417px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;