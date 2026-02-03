import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const experiences = [
        {
            id: 1,
            type: 'education',
            title: 'BE Computer Science & Engineering',
            company: 'Sri Krishna College of Technology',
            period: '2023 - Present',
            description:
                'Pursuing Bachelor of Engineering in Computer Science. Gaining strong foundation in programming, data structures, and algorithms.',
            skills: ['Problem Solving', 'Full Stack', 'Cloud Computing'],
        },
        {
            id: 2,
            type: 'education',
            title: 'Senior Secondary Education',
            company: 'Geethaanjali All India Senior Secondary School',
            period: 'Completed 2023',
            description:
                'Completed higher secondary education with a focus on Computer Science and Mathematics.',
            skills: ['Computer Science', 'Mathematics', 'Physics'],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="experience" className="experience" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    My <span className="gradient-text">Journey</span>
                </motion.h2>

                <motion.div
                    className="timeline"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <div className="timeline-line" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            variants={itemVariants}
                        >
                            <motion.div
                                className="timeline-content glass-card"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="timeline-badge">
                                    {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                                    <span>{exp.period}</span>
                                </div>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <h4 className="timeline-company">{exp.company}</h4>
                                <p className="timeline-description">{exp.description}</p>
                                <div className="timeline-skills">
                                    {exp.skills.map((skill, idx) => (
                                        <span key={idx} className="timeline-skill">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                            <div className="timeline-dot">
                                <div className="dot-inner" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
