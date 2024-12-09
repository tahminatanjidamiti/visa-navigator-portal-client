import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const VisaDetails = () => {
  const visa = useLoaderData(); 
  const { _id, country_name, visa_type, processing_time, fee, validity, application_method } = visa;

  const [modalOpen, setModalOpen] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      appliedDate: new Date().toISOString().slice(0, 10),
      fee,
      visaId: _id,
    };

    fetch(`http://localhost:5000/applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire('Application Submitted!', 'Your application has been recorded.', 'success');
        setModalOpen(false); 
      })
      .catch(() => {
        Swal.fire('Error!', 'Could not submit the application. Please try again.', 'error');
      });
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl text-teal-600 mb-4">{country_name} Visa</h1>
      <p><strong>Visa Type:</strong> {visa_type}</p>
      <p><strong>Processing Time:</strong> {processing_time}</p>
      <p><strong>Fee:</strong> ${fee}</p>
      <p><strong>Validity:</strong> {validity}</p>
      <p><strong>Application Method:</strong> {application_method}</p>
      <button onClick={() => setModalOpen(true)} className="btn bg-teal-500 text-white mt-4">
        Apply for the Visa
      </button>

      {modalOpen && (
        <div className="modal">
          <form onSubmit={handleApply} className="modal-box">
            <h2 className="text-2xl mb-4">Apply for Visa</h2>
            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full mb-3" required />
            <input type="text" name="firstName" placeholder="First Name" className="input input-bordered w-full mb-3" required />
            <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered w-full mb-3" required />
            <button type="submit" className="btn bg-teal-500 text-white w-full">
              Apply
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;