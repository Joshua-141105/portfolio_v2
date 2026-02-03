import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhone,
    FaPaperPlane,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const ref = useRef(null);
    const formRef = useRef();
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'joshua@example.com',
            link: 'mailto:joshua@example.com',
        },
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '+91 98765 43210',
            link: 'tel:+919876543210',
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Location',
            value: 'Bangalore, India',
            link: '#',
        },
    ];

    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/', label: 'GitHub' },
        { icon: <FaLinkedin />, url: 'https://linkedin.com/', label: 'LinkedIn' },
        { icon: <FaTwitter />, url: 'https://twitter.com/', label: 'Twitter' },
        { icon: <FaInstagram />, url: 'https://instagram.com/', label: 'Instagram' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                'service_4j6qgor',
                'template_o88bjjo',
                formRef.current,
                'nw3imUc0neXNNLGIX'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSubmitStatus('success');
                    setIsSubmitting(false);
                    e.target.reset();
                    setTimeout(() => setSubmitStatus(null), 5000);
                },
                (error) => {
                    console.log(error.text);
                    setSubmitStatus('error');
                    setIsSubmitting(false);
                    setTimeout(() => setSubmitStatus(null), 5000);
                }
            );
    };

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="contact" className="contact" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Get In <span className="gradient-text">Touch</span>
                </motion.h2>

                <motion.p
                    className="contact-subtitle"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Have a project in mind or want to collaborate? I&apos;d love to hear from you!
                </motion.p>

                <div className="contact-content">
                    {/* Contact Info */}
                    <motion.div
                        className="contact-info"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        <motion.div className="info-section" variants={itemVariants}>
                            <h3>Let&apos;s Connect</h3>
                            <p>
                                I&apos;m currently looking for full-time opportunities.
                                If you have a project that needs creative solutions, I&apos;m your developer!
                            </p>
                        </motion.div>

                        <motion.div className="info-cards" variants={itemVariants}>
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.link}
                                    className="info-card glass-card"
                                    whileHover={{ scale: 1.03, x: 10 }}
                                >
                                    <div className="info-icon">{info.icon}</div>
                                    <div className="info-details">
                                        <span className="info-label">{info.label}</span>
                                        <span className="info-value">{info.value}</span>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.div className="social-section" variants={itemVariants}>
                            <h4>Follow Me</h4>
                            <div className="social-links">
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
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="contact-form-wrapper glass-card"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="title"
                                    required
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <span className="loading-spinner" />
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            {submitStatus === 'success' && (
                                <motion.div
                                    className="submit-success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    ✅ Message sent successfully! I&apos;ll get back to you soon.
                                </motion.div>
                            )}
                            {submitStatus === 'error' && (
                                <motion.div
                                    className="submit-error"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ color: '#ff4757', textAlign: 'center', padding: '10px' }}
                                >
                                    ❌ Failed to send message. Please try again later.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
