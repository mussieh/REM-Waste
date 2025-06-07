import { PencilRuler } from "lucide-react";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import type { Skip } from "../shared/types/Skip";
import SkipCard from "../components/SkipCard";
import Loader from "../components/Loader";
import ActionBar from "../components/ActionBar";
import ErrorCard from "../components/ErrorCard";
import { retry } from "../utils/retry";
import { motion } from "motion/react";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Home = () => {
    const [skips, setSkips] = useState<Skip[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchSkips = async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await retry(
                async () => {
                    const response = await fetch(
                        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
                    );
                    if (!response.ok) {
                        throw new Error(
                            "Failed to fetch skips. Please try again!"
                        );
                    }
                    return response.json();
                },
                3,
                1500
            ); // Retry 3 times with 1.5s delay

            setSkips(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSkips();
    }, []);

    return (
        <main className="min-h-screen bg-background">
            <section>
                <div className="px-8 xl:px-24">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col text-header-color gap-6 items-center pt-12"
                    >
                        <motion.div variants={itemVariants} className="w-full">
                            <Nav />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <PencilRuler
                                className="md:mt-10"
                                color="#12B981"
                                size={40}
                            />
                        </motion.div>
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl text-center font-bold"
                        >
                            Choose Your Skip Size
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-center"
                        >
                            Find the perfect skip for your project. We offer a
                            range of sizes to suit all needs.
                        </motion.p>
                    </motion.div>
                    {loading && <Loader />}
                    {!loading && error && (
                        <ErrorCard error={error} onRetry={fetchSkips} />
                    )}
                    {!loading && !error && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="pt-12 pb-70"
                        >
                            <motion.ul
                                variants={containerVariants}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {skips.map((skip) => (
                                    <motion.li
                                        variants={itemVariants}
                                        key={skip.id}
                                        className="w-full"
                                    >
                                        <SkipCard skip={skip} />
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    )}
                </div>
                <ActionBar />
            </section>
        </main>
    );
};

export default Home;
