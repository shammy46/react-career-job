// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob=()=>{
        toast('you have applied succesfully');
    }



    return (
        <div className="space-y-7">
            <h2 className="text-center font-bold text-2xl">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 space-y-5">
                    <p><span className="font-bold">Job Description: </span>{job.job_description}</p>
                    <p><span className="font-bold">Job responsibility: </span>{job.job_responsibility}</p>
                    <p><span className="font-bold">educationalrequirements: </span>{job.educational_requirements}</p>
                    <p><span className="font-bold">experiences: </span>{job.experiences}</p>

                </div>
                <div className="border space-y-4">
                    <div className="border bg-[#d7ddff] space-y-5">
                        <h2><span className="font-bold">Job Details</span></h2>
                        <hr />
                        <p><span className="font-bold">Salary:</span>{job.salary}</p>
                        <p><span className="font-bold">Job Title:</span>{job.job_title}</p>

                        <h2><span className="font-bold">Contact Information</span></h2>
                        <hr />
                        <p><span className="font-bold">Phone: </span>{job.contact_information.phone}</p>
                        <p><span className="font-bold">Email: </span>{job.contact_information.email}</p>
                        <p><span className="font-bold">Address: </span>{job.contact_information.address}</p>
                    </div>
                    <button onClick={handleApplyJob} className="btn w-full bg-[#7E90FE] text-white ">Apply Now</button>

                </div>
                <ToastContainer />
            </div>

        </div>
    );
};

export default JobDetails;