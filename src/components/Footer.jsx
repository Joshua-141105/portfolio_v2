import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <footer className="footer">
            <div className="footer-glow" />
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="gradient-text">&lt;Portfolio /&gt;</h3>
                        <p>
                            Building digital experiences that make a difference. Let&apos;s create
                            something amazing together!
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-cta">
                        <h4>Available for Work</h4>
                        <p>Open to exciting opportunities and collaborations.</p>
                        <Link to="contact" smooth={true} duration={500} offset={-80}>
                            <motion.button
                                className="btn btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let&apos;s Talk
                            </motion.button>
                        </Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>
                            © {currentYear} Joshua Arnold Leo. Made with{' '}
                            <motion.span
                                className="heart"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                            >
                                <FaHeart />
                            </motion.span>{' '}
                            and lots of ☕
                        </p>
                    </div>

                    <Link
                        to="hero"
                        smooth={true}
                        duration={800}
                        className="back-to-top"
                    >
                        <motion.div
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
                        >
                            <FaArrowUp />
                        </motion.div>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
