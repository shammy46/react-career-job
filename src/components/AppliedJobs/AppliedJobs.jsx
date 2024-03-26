import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/storedJobApplication";
import { key } from "localforage";


const AppliedJobs = () => {

    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);
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
            // console.log(jobs, storedJobIds, jobApplied);
        }
    }, []);



    return (
        <div>
            <h2 className="text-3xl font bold text-center">Applied jobs: {appliedJob.length}</h2>
            <div className="text-right">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>ALL</a></li>
                        <li><a>Remote</a></li>
                        <li><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="border-2 border-red-500">
                <ul>
                    {
                        appliedJob.map(job => <li key={job.id}> <span>{job.job_title} : {job.company_name}</span></li>)
                    }
                </ul>
            </div>

        </div>
    );
};

export default AppliedJobs;