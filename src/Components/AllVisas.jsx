import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';

const AllVisas = () => {
    const loadedVisas = useLoaderData();
    const [visas, setVisas] = useState(loadedVisas);

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-4xl text-center text-teal-600 mb-8">All Visas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {visas.map((visa) => (
                    <VisaCard key={visa._id} visa={visa} />
                ))}
            </div>
        </div>
    );
};

export default AllVisas;