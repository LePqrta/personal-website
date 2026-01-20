import React from "react";
import './Experiences.css';
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import experienceData from '../../data/experiences.json';
import { Experience } from '../../types';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

function Experiences() {
    useDocumentTitle('Experiences | Onat Kaan Atılgan');
    const experiences: Experience[] = experienceData.experiences;

    return (
        <div className="experiences">
            <section className="experiences-section" id="experiences">
                <h2>My Experiences</h2>
                {experiences.map((exp, i) => (
                    <ExperienceCard key={exp.title + i} exp={exp} previewCount={0} />
                ))}
            </section>
        </div>
    );
}

export default Experiences;