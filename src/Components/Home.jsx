import React, { useEffect, useState } from 'react';
import LatestVisa from './LatestVisa';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import KeyFeature from './KeyFeature';
import ApplicationGuide from './ApplicationGuide';

const Home = () => {
    const loadedVisas = useLoaderData();
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
           <div className='flex justify-end w-11/12'>
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
            <Banner></Banner>
            <LatestVisa loadedVisas={loadedVisas}></LatestVisa>
            <KeyFeature></KeyFeature>
            <ApplicationGuide></ApplicationGuide>
        </div>
    );
};

export default Home;