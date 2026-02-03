import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeFilter, setActiveFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description:
                'A full-featured online shopping platform with cart functionality, payment integration, and admin dashboard.',
            image: 'ecommerce',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'fullstack',
            liveUrl: '#',
            githubUrl: '#',
            color: '#00d9ff',
        },
        {
            id: 2,
            title: 'Task Management App',
            description:
                'A collaborative task management application with real-time updates, drag-and-drop interface, and team features.',
            image: 'taskmanager',
            tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
            category: 'fullstack',
            liveUrl: '#',
            githubUrl: '#',
            color: '#ff00e5',
        },
        {
            id: 3,
            title: 'AI Chat Assistant',
            description:
                'An intelligent chatbot powered by machine learning with natural language processing capabilities.',
            image: 'aichat',
            tags: ['Python', 'TensorFlow', 'FastAPI', 'React'],
            category: 'ai',
            liveUrl: '#',
            githubUrl: '#',
            color: '#00ff88',
        },
        {
            id: 4,
            title: 'Portfolio Website',
            description:
                'A stunning personal portfolio website with smooth animations and modern design aesthetics.',
            image: 'portfolio',
            tags: ['React', 'Framer Motion', 'CSS3'],
            category: 'frontend',
            liveUrl: '#',
            githubUrl: '#',
            color: '#ffd700',
        },
        {
            id: 5,
            title: 'Social Media Dashboard',
            description:
                'A comprehensive analytics dashboard for tracking social media metrics and engagement.',
            image: 'dashboard',
            tags: ['React', 'D3.js', 'Node.js', 'Redis'],
            category: 'fullstack',
            liveUrl: '#',
            githubUrl: '#',
            color: '#ff6b6b',
        },
        {
            id: 6,
            title: 'Weather Application',
            description:
                'A beautiful weather app with location-based forecasts, interactive maps, and weather alerts.',
            image: 'weather',
            tags: ['React Native', 'Weather API', 'Geolocation'],
            category: 'mobile',
            liveUrl: '#',
            githubUrl: '#',
            color: '#4ecdc4',
        },
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'ai', label: 'AI/ML' },
        { id: 'mobile', label: 'Mobile' },
    ];

    // Reset page when filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeFilter]);

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    // Pagination Logic
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section id="projects" className="projects" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    My <span className="gradient-text">Projects</span>
                </motion.h2>

                {/* Filter Buttons */}
                <motion.div
                    className="project-filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid with AnimatePresence for pagination transitions */}
                <div className="projects-wrapper">
                    <AnimatePresence mode="wait">
                        <motion.div
                            className="projects-grid"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            key={currentPage + activeFilter}
                        >
                            {currentProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    className="project-card glass-card"
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                    layout
                                >
                                    <div
                                        className="project-image"
                                        style={{ '--project-color': project.color }}
                                    >
                                        <div className="project-placeholder">
                                            <span className="placeholder-icon">🚀</span>
                                        </div>
                                        <div className="project-overlay">
                                            <div className="project-links">
                                                <a
                                                    href={project.liveUrl}
                                                    className="project-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Live Demo"
                                                >
                                                    <FaExternalLinkAlt />
                                                </a>
                                                <a
                                                    href={project.githubUrl}
                                                    className="project-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="GitHub"
                                                >
                                                    <FaGithub />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-content">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tags">
                                            {project.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="project-tag"
                                                    style={{ borderColor: project.color }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <motion.div
                        className="pagination"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <button
                            className="page-btn prev"
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <FaChevronLeft />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
                                onClick={() => paginate(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            className="page-btn next"
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <FaChevronRight />
                        </button>
                    </motion.div>
                )}

                {/* View More Button */}
                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <FaGithub />
                        View All on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
