import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaJava,
    FaDocker,
    FaGitAlt,
    FaAws,
    FaFigma,
} from 'react-icons/fa';
import {
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiMongodb,
    SiPostgresql,
    SiTailwindcss,
    SiFirebase,
    SiRedux,
    SiGraphql,
    SiFlutter,
    SiKubernetes,
    SiExpress,
} from 'react-icons/si';
import './Skills.css';

const Skills = ({ theme }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', icon: <FaReact />, color: '#61DAFB' },
                { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
                { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
                { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
                { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
                { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
                { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
                { name: 'Python', icon: <FaPython />, color: '#3776AB' },
                { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
                { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
                { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
            ],
        },
        {
            title: 'Database & Cloud',
            skills: [
                { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
                { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
                { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
                { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
                { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
                { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
            ],
        },
        {
            title: 'Other',
            skills: [
                { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
                { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
            ],
        },
    ];

    const allSkills = skillCategories.flatMap((cat) => cat.skills);

    // Set marquee gradient color based on theme
    const marqueeGradientColor = theme === 'light' ? '#f8f9fa' : '#0a0a0f';

    return (
        <section id="skills" className="skills" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    My <span className="gradient-text">Skills</span>
                </motion.h2>

                {/* Marquee Skills */}
                <motion.div
                    className="skills-marquee-section"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Marquee
                        gradient={true}
                        gradientColor={marqueeGradientColor}
                        gradientWidth={100}
                        speed={40}
                        pauseOnHover={true}
                        className="skills-marquee"
                    >
                        {allSkills.map((skill, index) => (
                            <div key={index} className="marquee-skill-item">
                                <span className="marquee-icon" style={{ color: skill.color }}>
                                    {skill.icon}
                                </span>
                                <span className="marquee-name">{skill.name}</span>
                            </div>
                        ))}
                    </Marquee>

                    <Marquee
                        gradient={true}
                        gradientColor={marqueeGradientColor}
                        gradientWidth={100}
                        speed={30}
                        pauseOnHover={true}
                        direction="right"
                        className="skills-marquee"
                    >
                        {[...allSkills].reverse().map((skill, index) => (
                            <div key={index} className="marquee-skill-item">
                                <span className="marquee-icon" style={{ color: skill.color }}>
                                    {skill.icon}
                                </span>
                                <span className="marquee-name">{skill.name}</span>
                            </div>
                        ))}
                    </Marquee>
                </motion.div>

                {/* Skills Grid */}
                <div className="skills-grid">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className="skill-category glass-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                        >
                            <h3 className="category-title">{category.title}</h3>
                            <div className="category-skills">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className="skill-item"
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        style={{ '--skill-color': skill.color }}
                                    >
                                        <span className="skill-icon" style={{ color: skill.color }}>
                                            {skill.icon}
                                        </span>
                                        <span className="skill-name">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
