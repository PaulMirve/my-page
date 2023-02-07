import { Job } from "@_types/Job";
import { Project } from "@_types/Project";
import { Skill } from "@_types/Skill";
import { collection, getDocs } from "firebase/firestore";
import { database } from "./client";

export const getProjects = async (): Promise<Project[]> => {
  return getCollection("projects");
};

export const getJobs = async (): Promise<Job[]> => {
  return getCollection("jobs");
};

export const getSkills = async (): Promise<Skill[]> => {
  return getCollection("skills");
};

async function getCollection<T>(collectionName: string): Promise<T[]> {
  const ref = collection(database, collectionName);
  const snap = await getDocs(ref);
  const list = snap.docs.map((doc) => doc.data());
  return list as [];
}
