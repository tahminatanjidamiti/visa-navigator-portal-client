import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const VisaApplication = () => {

  const loaderData = useLoaderData() || [];
  const [search, setSearch] =useState("");
  const [applications, setApplications] = useState(loaderData);

  const handleSearch = () => {
    fetch(`http://localhost:5000/visaApplication/${applications[0]?.email}?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "There was an error fetching search result.",
          icon: "error"
        });
      });
  };


  const handleCancel = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/visaApplication/${_id}`,
          { method: 'DELETE' })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Cancelled!",
                text: "Your application has been removed.",
                icon: "success"
              });
              const remaining = applications.filter((app) => app._id !== _id);
              setApplications(remaining);
            }
          })
      }
    });
  };

  return (
    <div className="container mx-auto my-10 p-5">
      <h1 className="text-4xl text-center mb-8">My Visa Applications</h1>
      <div className="w-1/2 mx-auto my-5 flex gap-2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="input input-bordered flex-grow"
          placeholder="Search by Country"
        />
        <button onClick={handleSearch} className="btn bg-sky-400 text-white">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <div key={app._id} className="card border border-green-100 bg-base-100 shadow-xl p-4">
            <img
              src={app.country_image}
              alt={app.country_name}
              className="w-full h-44 object-cover mb-4 rounded-md"
            />
            <h2 className="card-title text-lg font-bold mb-2">{app.country_name}</h2>
            <p><strong>Visa Type:</strong> {app.visa_type}</p>
            <p><strong>Processing Time:</strong> {app.processing_time}</p>
            <p><strong>Fee:</strong> ${app.fee}</p>
            <p><strong>Validity:</strong> {app.validity}</p>
            <p><strong>Application Method:</strong> {app.application_method}</p>
            <p><strong>Applied Date:</strong> {app.appliedDate}</p>
            <p><strong>Applicant:</strong> {`${app.firstName} ${app.lastName}`}</p>
            <p><strong>Email:</strong> {app.email}</p>
            <button
              onClick={() => handleCancel(app._id)}
              className="btn bg-sky-400 text-white mt-4 w-full"
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaApplication;