import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyAddedVisas = () => {
    const loadedVisas = useLoaderData() || [];
    const [visas, setVisas] = useState(loadedVisas);
    const [selectedVisa, setSelectedVisa] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/all_visas/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Visa has been deleted.', 'success');
                            setVisas(visas.filter(visa => visa._id !== id));
                        }
                    });
            }
        });
    };


    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedVisa = {
            country: e.target.country.value,
            visa_type: e.target.visa_type.value,
            processing_time: e.target.processing_time.value,
            fee: e.target.fee.value,
            validity: e.target.validity.value,
            application_method: e.target.application_method.value,
        };

        fetch(`http://localhost:5000/all_visas/${selectedVisa._id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedVisa),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire('Updated!', 'Visa data has been updated.', 'success');
                    setVisas(visas.map(visa => visa._id === selectedVisa._id ? { ...visa, ...updatedVisa } : visa));
                    setIsModalOpen(false);
                }
            });
    };


    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold text-center mb-8">My Added Visas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {visas.map(visa => (
                    <div key={visa._id} className="card bg-base-100 shadow-xl p-4">
                        <img src={visa.country_image} alt={visa.country} className="mb-4" />
                        <h2 className="text-lg font-semibold">Country: {visa.country}</h2>
                        <p>Visa Type: {visa.visa_type}</p>
                        <p>Processing Time: {visa.processing_time}</p>
                        <p>Fee: ${visa.fee}</p>
                        <p>Validity: {visa.validity}</p>
                        <p>Application Method: {visa.application_method}</p>
                        <div className="mt-4 flex space-x-4">
                            <button
                                className="btn bg-teal-600 text-white"
                                onClick={() => {
                                    setSelectedVisa(visa);
                                    setIsModalOpen(true);
                                }}
                            >
                                Update
                            </button>
                            <button
                                className="btn bg-red-600 text-white"
                                onClick={() => handleDelete(visa._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Update Modal */}
            {isModalOpen && selectedVisa && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Update Visa Information</h3>
                        <form onSubmit={handleUpdate}>
                            <div className="form-control">
                                <label>Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    defaultValue={selectedVisa.country}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label>Visa Type</label>
                                <input
                                    type="text"
                                    name="visa_type"
                                    defaultValue={selectedVisa.visa_type}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label>Processing Time</label>
                                <input
                                    type="text"
                                    name="processing_time"
                                    defaultValue={selectedVisa.processing_time}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label>Fee</label>
                                <input
                                    type="number"
                                    name="fee"
                                    defaultValue={selectedVisa.fee}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label>Validity</label>
                                <input
                                    type="text"
                                    name="validity"
                                    defaultValue={selectedVisa.validity}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label>Application Method</label>
                                <input
                                    type="text"
                                    name="application_method"
                                    defaultValue={selectedVisa.application_method}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="modal-action">
                                <button type="submit" className="btn bg-teal-600 text-white">Submit</button>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );

};

export default MyAddedVisas;



