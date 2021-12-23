import { collection, getDocs } from "firebase/firestore"
import { IJob } from "interfaces/IJob";
import { database } from "./clientApp";

export const getJobs = async (): Promise<IJob[]> => {
    const jobsRef = collection(database, 'jobs');
    const jobsSnapshot = await getDocs(jobsRef);
    const jobsList = jobsSnapshot.docs.map(doc => doc.data());
    return jobsList as IJob[];
}