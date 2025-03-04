import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LatestVisa = ({loadedVisas}) => {
    const [visas, setVisas] = useState(loadedVisas);

    
  
    return (
      <div className="p-8 md:p-24 relative">
        <div className="absolute inset-0 animate-neon-glow -z-10"></div>
        <h2 className="text-3xl font-extrabold mb-8 flex justify-center items-center mx-auto">Latest Visas</h2>
        <p className='my-10 w-9/12 mx-auto text-center'>Explore tailored options, detailed requirements, and insider insights to simplify your journey and make global travel dreams a reality.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {visas.map((visa) => (
            <div key={visa._id} className="card border-4 border-base-900 w-full shadow-lg">
              <figure>
                <img src={visa.country_image} alt={visa.country_name} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-bold">{visa.country_name}</h3>
                <p><strong>Visa Type:</strong> {visa.visa_type}</p>
                <p><strong>Processing Time:</strong> {visa.processing_time}</p>
                <p><strong>Fee:</strong> {visa.fee}</p>
                <p><strong>Validity:</strong> {visa.validity}</p>
                <p><strong>Application Method:</strong> {visa.application_method}</p>
                <Link to={`/visa_details/${visa._id}`} className="btn bg-teal-300 mt-4 text-black">See Details</Link>
              </div>
            </div>
          ))}
        </div>
  
        
        <div className="mt-8 text-center">
          <Link to="/all_visas" className="btn bg-teal-500 text-black">See All Visas</Link>
        </div>
      </div>
    );
};

export default LatestVisa;