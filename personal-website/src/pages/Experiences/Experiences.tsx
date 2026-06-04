import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { getExperiences } from '../../services/data';
import { Experience } from '../../types';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { Briefcase } from 'lucide-react';

export default function Experiences() {
    useDocumentTitle('Experiences | Onat Kaan Atılgan');
    const experiences: Experience[] = getExperiences();

    // Tilted Scroll effect variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // The "Tilted Scroll" animation
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -20,
            scale: 0.9,
            transformPerspective: 1000
        },
        show: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div className="py-10 mb-20 overflow-visible">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
                    <Briefcase size={32} className="text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-primary">Experiences</span></h1>
                <p className="text-text-muted max-w-2xl mx-auto px-4 text-lg">
                    A timeline of my professional journey, highlighting the roles and responsibilities that have shaped my career.
                </p>
            </motion.div>

            <motion.section
                className="max-w-4xl mx-auto px-4 flex flex-col gap-8"
                id="experiences"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {experiences.map((exp, i) => (
                    <motion.div key={exp.title + i} variants={itemVariants} className="w-full">
                        <ExperienceCard exp={exp} previewCount={3} />
                    </motion.div>
                ))}
            </motion.section>
        </div>
    );
}