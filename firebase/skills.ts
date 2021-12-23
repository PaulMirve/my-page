import { collection, getDocs } from "firebase/firestore"
import { ISkill } from "interfaces/ISkill";
import { database } from "./clientApp";

export const getSkills = async (): Promise<ISkill[]> => {
    const skillsRef = collection(database, 'skills');
    const skillsSnap = await getDocs(skillsRef);
    const skillsList = skillsSnap.docs.map(doc => doc.data());
    return skillsList as ISkill[];
}