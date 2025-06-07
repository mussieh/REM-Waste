import { motion } from "framer-motion";
import logoImg from "../assets/images/logo.png";

const NotFound = () => {
    return (
        <main className="h-screen flex flex-col justify-center items-center">
            <motion.section
                className="flex flex-col items-center p-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.img
                    className="w-50 h-50 rounded-2xl"
                    src={logoImg}
                    alt="REM Waste Logo"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.h1
                    className="text-3xl font-bold mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    404 - Page Not Found
                </motion.h1>
                <motion.p
                    className="text-xl leading-[2.2rem] text-center mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Sorry, the page you are looking for does not exist.
                </motion.p>
            </motion.section>
        </main>
    );
};

export default NotFound;
