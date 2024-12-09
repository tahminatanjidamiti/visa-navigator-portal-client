import React from 'react';
import Swal from 'sweetalert2';

const AddVisa = () => {
    const handleAddVisa = event => {
        event.preventDefault();

        const form = event.target;
        const country_image = form.country_image.value;
        const country_name = form.country_name.value;
        const visa_type = form.visa_type.value;
        const processing_time = form.processing_time.value;
        const required_documents = Array.from(form.required_documents)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);
        const description = form.description.value;
        const age_restriction = form.age_restriction.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const application_method = form.application_method.value;

        const newVisa = {
            country_image,
            country_name,
            visa_type,
            processing_time,
            required_documents,
            description,
            age_restriction,
            fee,
            validity,
            application_method
        };

        // Send data to the server
        fetch('http://localhost:5000/all_visas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newVisa)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Visa Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error adding the visa.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            });
    };

    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold text-center'>Add a Visa</h2>
            <form onSubmit={handleAddVisa}>
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Country Image URL</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="country_image" placeholder="Country Image URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="country_name" placeholder="Country Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-8'>
                    
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Visa Type</span>
                        </label>
                        <select name="visa_type" className="select select-bordered w-full">
                            <option value="Tourist Visa">Tourist Visa</option>
                            <option value="Student Visa">Student Visa</option>
                            <option value="Official Visa">Official Visa</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="processing_time" placeholder="Processing Time" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
               
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Age Restriction</span>
                        </label>
                        <label className='input-group'>
                            <input type="number" name="age_restriction" placeholder="Age Restriction" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>

                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Fee</span>
                        </label>
                        <label className='input-group'>
                            <input type="number" name="fee" placeholder="Fee" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Validity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="validity" placeholder="Validity" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>

                <div className='mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Application Method</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="application_method" placeholder="Application Method" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>

                {/* Required Documents */}
                <div className='mb-8'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Required Documents</span>
                        </label>
                        <div className="space-y-2">
                            <div className="flex items-center gap-4">
                                <input type="checkbox" name="required_documents" value="Valid passport" id="passport" />
                                <label htmlFor="passport">Valid Passport</label>
                            </div>
                            <div className="flex items-center gap-4">
                                <input type="checkbox" name="required_documents" value="Visa application form" id="visa-form" />
                                <label htmlFor="visa-form">Visa Application Form</label>
                            </div>
                            <div className="flex items-center gap-4">
                                <input type="checkbox" name="required_documents" value="Recent passport-sized photograph" id="photo" />
                                <label htmlFor="photo">Recent Passport-sized Photograph</label>
                            </div>
                        </div>
                    </div>
                </div>

                <input className="btn btn-block bg-teal-400 text-white" type="submit" value="Add Visa" />
            </form>
        </div>
    );
};

export default AddVisa;