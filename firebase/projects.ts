import IProject from "interfaces/IProjects";
import { collection, getDocs } from 'firebase/firestore';
import { database } from "./clientApp";

export const getProjects = async (): Promise<IProject[]> => {
    const projectsRef = collection(database, 'projects');
    const projectsSnap = await getDocs(projectsRef);
    const projectsList = projectsSnap.docs.map(doc => doc.data());
    return projectsList as IProject[];
}