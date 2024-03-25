const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applicaion');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];

}


const saveJobApplocation = id => {

    const storedJobApplication = getStoredJobApplication();
    const exists = storedJobApplication.find(jobId => jobId === id);
    if (!exists) {
        storedJobApplication.push(id);
        localStorage.setItem('job-applicaion', JSON.stringify(storedJobApplication))
    }

}

export { getStoredJobApplication,saveJobApplocation }