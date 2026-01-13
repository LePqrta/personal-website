import React from "react";
import './Experiences.css';
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import data from '../../data/experiences.json';

type Experience = {
    title: string;
    company?: string;
    URL?: string;
    startDate?: string;
    endDate?: string;
    responsibilities?: string[];
};

function Experiences() {
    const experiences: Experience[] = (data as any).experiences ?? [];

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