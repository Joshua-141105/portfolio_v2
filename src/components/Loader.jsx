import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
    return (
        <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="loader-content">
                <motion.div
                    className="loader-logo"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="gradient-text">&lt;/&gt;</span>
                </motion.div>
                <motion.div
                    className="loader-bar"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
                <motion.p
                    className="loader-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Loading Portfolio...
                </motion.p>
            </div>

            {/* Animated Background */}
            <div className="loader-bg">
                <motion.div
                    className="loader-circle circle-1"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                    className="loader-circle circle-2"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>
        </motion.div>
    );
};

export default Loader;
