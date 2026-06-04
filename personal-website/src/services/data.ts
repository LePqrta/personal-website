import profileData from '../data/profile.json';
import projectsData from '../data/projects.json';
import experiencesData from '../data/experiences.json';
import { Profile, Project, Experience } from '../types';

export const getProfile = (): Profile => {
    return profileData as Profile;
};

export const getProjects = (): Project[] => {
    return projectsData.projects as Project[];
};

export const getExperiences = (): Experience[] => {
    return experiencesData.experiences as Experience[];
};
