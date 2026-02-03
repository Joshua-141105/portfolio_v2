import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiArrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/', label: 'GitHub' },
        { icon: <FaLinkedin />, url: 'https://linkedin.com/', label: 'LinkedIn' },
        { icon: <FaTwitter />, url: 'https://twitter.com/', label: 'Twitter' },
        { icon: <SiLeetcode />, url: 'https://leetcode.com/', label: 'LeetCode' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="hero" className="hero">
            {/* Animated Background Elements */}
            <div className="hero-bg-elements">
                <motion.div
                    className="floating-shape shape-1"
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="floating-shape shape-2"
                    animate={{
                        y: [0, 20, 0],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="floating-shape shape-3"
                    animate={{
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-greeting" variants={itemVariants}>
                        <span className="greeting-emoji">👋</span>
                        <span className="greeting-text">Hello, I&apos;m</span>
                    </motion.div>

                    <motion.h1 className="hero-name" variants={itemVariants}>
                        <span className="name-text">Joshua Arnold</span>
                        <span className="gradient-text name-highlight">&nbsp;Leo</span>
                    </motion.h1>

                    <motion.div className="hero-title" variants={itemVariants}>
                        <TypeAnimation
                            sequence={[
                                'CSE Undergraduate',
                                2000,
                                'Aspiring Full Stack Developer',
                                2000,
                                'Problem Solver',
                                2000,
                                'Tech Enthusiast',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="typing-text gradient-text"
                        />
                    </motion.div>

                    <motion.p className="hero-description" variants={itemVariants}>
                        Passionate about creating innovative digital solutions and crafting
                        seamless user experiences. I transform ideas into reality through
                        clean code and creative design.
                    </motion.p>

                    <motion.div className="hero-buttons" variants={itemVariants}>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="btn btn-primary"
                        >
                            View My Work
                            <HiArrowDown className="btn-icon" />
                        </Link>
                        <a href="/Resume.pdf" className="btn btn-outline" download>
                            <FaDownload />
                            Download CV
                        </a>
                    </motion.div>

                    <motion.div className="hero-socials" variants={itemVariants}>
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="hero-image-wrapper">
                        <div className="hero-image-glow" />
                        <div className="hero-image-ring" />
                        <div className="hero-image-container">
                            <div className="hero-avatar">
                                <span className="avatar-initials">JA</span>
                            </div>
                        </div>
                        <motion.div
                            className="orbit-ring"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        >
                            <div className="orbit-dot dot-1" />
                            <div className="orbit-dot dot-2" />
                            <div className="orbit-dot dot-3" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <Link to="about" smooth={true} duration={500} offset={-80}>
                    <motion.div
                        className="scroll-mouse"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <div className="scroll-wheel" />
                    </motion.div>
                    <span className="scroll-text">Scroll Down</span>
                </Link>
            </motion.div>
        </section >
    );
};

export default Hero;
