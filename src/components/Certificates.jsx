import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaAward, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeFilter, setActiveFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const certificates = [
        {
            id: 1,
            title: 'Full Stack Web Development',
            issuer: 'Udemy',
            date: 'Dec 2023',
            description: 'Comprehensive bootcamp covering React, Node.js, MongoDB, and Express.',
            image: 'certificate-1',
            tags: ['React', 'Node.js', 'Web Dev'],
            category: 'course',
            credentialUrl: '#',
            color: '#00d9ff',
        },
        {
            id: 2,
            title: 'Machine Learning A-Z',
            issuer: 'Coursera',
            date: 'Aug 2023',
            description: 'In-depth course on Machine Learning algorithms and implementation in Python.',
            tags: ['Python', 'ML', 'Data Science'],
            category: 'course',
            credentialUrl: '#',
            color: '#ff00e5',
        },
        {
            id: 3,
            title: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services',
            date: 'June 2023',
            description: 'Fundamental understanding of IT services and their uses in the AWS Cloud.',
            tags: ['AWS', 'Cloud', 'DevOps'],
            category: 'certification',
            credentialUrl: '#',
            color: '#00ff88',
        },
        {
            id: 4,
            title: 'Hackathon Winner 2023',
            issuer: 'TechFest',
            date: 'Mar 2023',
            description: 'First place winner for creating an innovative AI-based solution for accessibility.',
            tags: ['Hackathon', 'AI', 'Innovation'],
            category: 'achievement',
            credentialUrl: '#',
            color: '#ffd700',
        },
        {
            id: 5,
            title: 'Introduction to Cybersecurity',
            issuer: 'Cisco',
            date: 'Jan 2023',
            description: 'Basics of network security and protecting digital assets.',
            tags: ['Security', 'Cybersecurity', 'Network'],
            category: 'course',
            credentialUrl: '#',
            color: '#ff6b6b',
        },
    ];

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'course', label: 'Courses' },
        { id: 'certification', label: 'Certifications' },
        { id: 'achievement', label: 'Achievements' },
    ];

    // Reset page when filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeFilter]);

    const filteredCertificates =
        activeFilter === 'all'
            ? certificates
            : certificates.filter((c) => c.category === activeFilter);

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCertificates.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCertificates.length / itemsPerPage);

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
        <section id="certificates" className="certificates" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    My <span className="gradient-text">Certificates</span>
                </motion.h2>

                {/* Filter Buttons */}
                <motion.div
                    className="certificate-filters"
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

                {/* Certificates Grid */}
                <div className="certificates-wrapper">
                    <AnimatePresence mode="wait">
                        <motion.div
                            className="certificates-grid"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            key={currentPage + activeFilter}
                        >
                            {currentItems.map((cert) => (
                                <motion.div
                                    key={cert.id}
                                    className="certificate-card glass-card"
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                    layout
                                >
                                    <div
                                        className="certificate-icon-wrapper"
                                        style={{ '--cert-color': cert.color }}
                                    >
                                        <FaAward className="certificate-icon-large" />
                                    </div>

                                    <div className="certificate-content">
                                        <span className="certificate-date">{cert.date}</span>
                                        <h3 className="certificate-title">{cert.title}</h3>
                                        <h4 className="certificate-issuer">{cert.issuer}</h4>
                                        <p className="certificate-description">{cert.description}</p>

                                        <div className="certificate-tags">
                                            {cert.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="certificate-tag"
                                                    style={{ borderColor: cert.color }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="credential-link"
                                        >
                                            <FaExternalLinkAlt /> View Credential
                                        </a>
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
            </div>
        </section>
    );
};

export default Certificates;
