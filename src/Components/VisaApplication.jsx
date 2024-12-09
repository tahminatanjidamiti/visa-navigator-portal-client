import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const VisaApplication = () => {

  const loaderData = useLoaderData() || []; 
  

  const [applications, setApplications] = useState(loaderData); 


  const handleCancel = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/my_visa_applications/${id}`,
           { method: 'DELETE' })
          .then((res) => {
            Swal.fire('Failed to cancel application');
            return res.json();
          })
          .then(() => {
            setApplications(applications.filter((app) => app._id !== id)); 
            Swal.fire('Cancelled!', 'Your application has been removed.', 'success');
          })
          .catch((err) => {
            Swal.fire('Error', err.message, 'error');
          });
      }
    });
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl text-center mb-8">My Visa Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <div key={app._id} className="card bg-base-100 shadow-xl p-4">
            <img
              src={app.country_image}
              alt={app.country}
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h2 className="card-title text-lg font-bold mb-2">{app.country}</h2>
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