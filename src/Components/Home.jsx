import React from 'react';
import LatestVisa from './LatestVisa';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadedVisas = useLoaderData();
    return (
        <div>
            <h2>Home</h2>
            <LatestVisa loadedVisas={loadedVisas}></LatestVisa>
        </div>
    );
};

export default Home;