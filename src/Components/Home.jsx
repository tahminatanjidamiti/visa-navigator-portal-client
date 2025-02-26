import React, { useEffect, useState } from 'react';
import LatestVisa from './LatestVisa';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import KeyFeature from './KeyFeature';
import ApplicationGuide from './ApplicationGuide';

const Home = () => {
    const loadedVisas = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <LatestVisa loadedVisas={loadedVisas}></LatestVisa>
            <KeyFeature></KeyFeature>
            <ApplicationGuide></ApplicationGuide>
        </div>
    );
};

export default Home;