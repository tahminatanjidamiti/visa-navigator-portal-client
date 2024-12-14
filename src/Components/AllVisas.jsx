import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';

const AllVisas = () => {
  const loadedVisas = useLoaderData();
  const [visas, setVisas] = useState(loadedVisas); // Displayed visas
  const [selectedType, setSelectedType] = useState('All'); // Selected visa type for filtering

  // Handle filtering based on visa type
  const handleFilter = (type) => {
    setSelectedType(type);
    if (type === 'All') {
      setVisas(loadedVisas); // Show all visas
    } else {
      const filteredVisas = loadedVisas.filter((visa) => visa.visa_type === type);
      setVisas(filteredVisas);
    }
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl text-center text-teal-600 mb-8">All Visas</h1>

      {/* Dropdown menu for filtering */}
      <div className="flex justify-center mb-6">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn bg-teal-500 text-white dropdown-toggle"
          >
            {selectedType === 'All' ? 'Filter by Visa Type' : `Filtered: ${selectedType}`}
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 shadow"
          >
            <li onClick={() => handleFilter('All')}><a>All</a></li>
            <li onClick={() => handleFilter('Tourist Visa')}><a>Tourist</a></li>
            <li onClick={() => handleFilter('Student Visa')}><a>Student</a></li>
            <li onClick={() => handleFilter('Official Visa')}><a>Official</a></li>
          </ul>
        </div>
      </div>

      {/* Display filtered visas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visas.length > 0 ? (
          visas.map((visa) => <VisaCard key={visa._id} visa={visa} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No visas found for the selected type.</p>
        )}
      </div>
    </div>
  );
};


export default AllVisas;