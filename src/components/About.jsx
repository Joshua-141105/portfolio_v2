import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="about" className="about" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    About <span className="gradient-text">Me</span>
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-image-section"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-image-wrapper">
                            <div className="about-image-bg" />
                            <div className="about-image-frame">
                                <div className="about-avatar">
                                    <div className="code-block">
                                        <span className="code-line">
                                            <span className="code-keyword">const</span>{' '}
                                            <span className="code-var">student</span> = {'{'}
                                        </span>
                                        <span className="code-line indent">
                                            <span className="code-prop">name</span>:{' '}
                                            <span className="code-string">&quot;Joshua&quot;</span>,
                                        </span>
                                        <span className="code-line indent">
                                            <span className="code-prop">role</span>:{' '}
                                            <span className="code-string">&quot;CSE Student&quot;</span>,
                                        </span>
                                        <span className="code-line indent">
                                            <span className="code-prop">learning</span>:{' '}
                                            <span className="code-keyword">true</span>,
                                        </span>
                                        <span className="code-line">{'};'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="about-decorations">
                                <motion.div
                                    className="decoration-dot dot-1"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.div
                                    className="decoration-dot dot-2"
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 2.5, repeat: Infinity }}
                                />
                                <motion.div
                                    className="decoration-line"
                                    animate={{ scaleY: [1, 1.1, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-text-section"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        <motion.div className="about-intro" variants={itemVariants}>
                            <h3>
                                Aspiring Developer with a{' '}
                                <span className="gradient-text">Passion for Code</span>
                            </h3>
                            <p>
                                I&apos;m a Computer Science & Engineering undergraduate based in India,
                                driven by curiosity and a desire to build impactful solutions.
                                I&apos;m focused on mastering the fundamentals of Full Stack Development
                                and Data Structures.
                            </p>
                        </motion.div>

                        <motion.div className="about-details" variants={itemVariants}>
                            <p>
                                My academic journey has equipped me with strong problem-solving skills
                                and a collaborative mindset. I love exploring new technologies,
                                participating in hackathons, and constantly pushing my boundaries
                                in software development.
                            </p>
                            <p>
                                I am currently seeking opportunities to apply my skills in a professional
                                environment, collaborate with experienced developers, and contribute
                                to innovative projects that solve real-world problems.
                            </p>
                        </motion.div>

                        <motion.div className="about-highlights" variants={itemVariants}>
                            <div className="highlight-item">
                                <span className="highlight-icon">🎯</span>
                                <span>Problem-solving enthusiast</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">💡</span>
                                <span>Creative thinker</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">🚀</span>
                                <span>Fast learner</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">🤝</span>
                                <span>Team player</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
