import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Components/provider/AuthProvider';

const VisaDetails = () => {
  const visa = useLoaderData();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { _id, country_name, visa_type, processing_time, fee, validity, application_method, country_image } = visa;
  const [modalOpen, setModalOpen] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      appliedDate: new Date().toISOString().slice(0, 10),
      fee: fee,
      visaId: _id,
      _id: _id,
      country_name: country_name,
      visa_type: visa_type,
      processing_time: processing_time,
      validity: validity,
      application_method: application_method,
      country_image: country_image,

    };

    fetch(`https://my-tenth-assignment-server-taupe.vercel.app/visaApplication`, {
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
        navigate(`/my_visa_application/${formData.email}`);
      })
      .catch((err) => {
        // console.error(err);
        Swal.fire('Error', 'Failed to submit application. Please try again.', 'error');
      });
  };

  return (

    <div>
      <div className="p-5 m-5 items-center justify-center mx-auto rounded-xl bg-sky-100 w-full">
        <div className="flex flex-col md:flex-row lg:mx-24 gap-5">
          <div className="w-full md:w-2/5 h-[300px]">
            <img src={country_image} className="w-full h-full object-cover rounded-lg shadow-2xl" alt="Country" />
          </div>
          <div className="space-y-3 w-3/5">
            <h1 className="text-4xl text-teal-600 mb-4">{country_name} Visa</h1>
            <p><strong>Visa Type:</strong> {visa_type}</p>
            <p><strong>Processing Time:</strong> {processing_time}</p>
            <p><strong>Fee:</strong> ${fee}</p>
            <p><strong>Validity:</strong> {validity}</p>
            <p><strong>Application Method:</strong> {application_method}</p>
            <button onClick={() => setModalOpen(true)} className="btn bg-teal-500 text-white mt-4">
              Apply for the Visa
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal modal-open">
          <div className="modal-box relative">
            <h2 className="text-2xl mb-4">Apply for Visa</h2>
            <form onSubmit={handleApply}>
              <input
                type="email"
                name="email"
                value={user?.email || ''}
                className="input input-bordered w-full mb-3"
                readOnly
                required
              />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input input-bordered w-full mb-3"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input input-bordered w-full mb-3"
                required
              />
              <input
                type="text"
                name="appliedDate"
                value={new Date().toISOString().slice(0, 10)}
                className="input input-bordered w-full mb-3"
                readOnly
              />
              <input
                type="text"
                name="fee"
                value={`$${fee}`}
                className="input input-bordered w-full mb-3"
                readOnly
              />
              <button type="submit" className="btn bg-teal-500 text-white w-full">
                Apply
              </button>
            </form>
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>

  );
};

export default VisaDetails;