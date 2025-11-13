import React, { useState } from 'react';
import "../Styles/Experience.css";

const experiences = [
    {
        id: "soti",
        company: "SOTI",
        title: "Software Developer Intern",
        location: "Mississauga, Ontario",
        date: "May 2024 – May 2025",
        bullets: [
            "Spearheaded UI revamp of SOTI Snap in React/Angular/TypeScript, shipping 20+ components and reducing average task clicks from 6→3 based on product telemetry.",
            "Revamped announcements service in C#/.NET, adding scheduled sends and bulk Excel import; cut manual entry time by 40% and eliminated recurring timeouts in peak hours.",
            "Delivered 10+ customer-specific apps with SOTI Snap, Blockly, JavaScript, and REST APIs, achieving 95% satisfaction."
        ]
    },
    {
        id: "utoronto",
        company: "University of Toronto",
        title: "Teaching Assistant",
        location: "Mississauga, Ontario",
        date: "January 2024 - May 2024",
        bullets: [
            "Provided technical mentorship for multiple full stack projects over a 4-month scrum development cycle.",
            "Taught design patterns, code architecture, Git, OOP, React, MongoDB, Neo4j, and PostgreSQL to classes averaging 50+ students.",
            "Marked assignments for 240+ students."
        ]
    }
];

const Experience = () => {
    const [activeExperience, setActiveExperience] = useState(experiences[0].id);

    const currentExperience = experiences.find(exp => exp.id === activeExperience) || experiences[0];

    return (
        <section className="experience" id="experience" data-aos="fade-down">
            <h1>Experience</h1>
            <div className="experience-container">
                <div className="experience-sidebar">
                    {experiences.map((exp) => (
                        <button
                            key={exp.id}
                            className={`company-button ${activeExperience === exp.id ? 'active' : ''}`}
                            onClick={() => setActiveExperience(exp.id)}
                            aria-label={`View ${exp.company} experience`}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>
                <div className="experience-content">
                    <div className="experience-header">
                        <h2>
                            {currentExperience.title} <span className="company-name">@ {currentExperience.company}</span>
                        </h2>
                        <p className="experience-date">{currentExperience.date}</p>
                    </div>
                    <ul className="experience-bullets">
                        {currentExperience.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;

