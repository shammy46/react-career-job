import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/storedJobApplication";



const AppliedJobs = () => {

    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    const HandleJobsFilter = filter => {

        if (filter === 'all') {
            setDisplayJobs(appliedJob)
        }

        else if (filter === 'remote') {
            const remoteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        }

        else if (filter === 'onsite') {
            const onsiteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs);
        }

    }



    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {

            // const jobApplied = jobs.filter(job => storedJobIds.includes(job.id));
            const jobApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id == id);
                if (job) {
                    jobApplied.push(job);
                }
            }


            setAppliedJob(jobApplied);
            setDisplayJobs(jobApplied);

            // console.log(jobs, storedJobIds, jobApplied);
        }
    }, [jobs]);



    return (
        <div>
            <h2 className="text-3xl font bold text-center">Applied jobs: {appliedJob.length}</h2>
            <div className="text-right">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>HandleJobsFilter('all')}><a>ALL</a></li>
                        <li onClick={()=> HandleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={()=>HandleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="border-2 border-red-500">
                <ul className="p-4 grid grid-cols-2 gap-5">
                    {
                        displayJobs.map(job => <li key={job.id}>
                            <div className="card w-96 bg-base-100 shadow-xl">

                                <div className="card-body">
                                    <h2 className="card-title">{job.job_title}</h2>
                                    <p><span className="font-bold">{job.company_name}</span>: {job.remote_or_onsite}</p>
                                    <div className="card-actions justify-end">
                                    <Link to={`/job/${job.id}`}>
                                    <button className="btn btn-primary">details</button>
                                        </Link>
                                        
                                    </div>
                                </div>

                            </div>
                        </li>)
                    }
                </ul>
            </div>


        </div>
    );
};

export default AppliedJobs;