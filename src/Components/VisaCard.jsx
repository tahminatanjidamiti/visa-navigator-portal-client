import React from 'react';
import { Link } from 'react-router-dom';

const VisaCard = ({ visa }) => {
  const { _id, country_name, visa_type, processing_time, fee, country_image } = visa;

  return (
    <div className="card bg-base-100 shadow-xl p-5">
      <figure>
        <img
          src={country_image}
          alt={`Visa to ${country_name}`}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold">{country_name}</h2>
        <p><strong>Visa Type:</strong> {visa_type}</p>
        <p><strong>Processing Time:</strong> {processing_time}</p>
        <p><strong>Fee:</strong> ${fee}</p>
        <Link to={`/visa_details/${_id}`}>
          <button className="btn bg-teal-500 text-white mt-4">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default VisaCard;