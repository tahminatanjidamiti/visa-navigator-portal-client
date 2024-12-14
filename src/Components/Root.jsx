import React, { useContext, useEffect } from 'react';
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
    
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-373px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;