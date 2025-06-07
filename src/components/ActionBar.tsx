import { useEffect, useState } from "react";
import { useSelectedSkipContext } from "../hooks/useSelectedSkipContext";
import { MoveRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const actionBarVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 400, damping: 30 },
    },
    exit: {
        y: "100%",
        opacity: 0,
        transition: { duration: 0.3 },
    },
};

const ActionBar = () => {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    const { selectedSkip } = useSelectedSkipContext();

    const dayHireText = screenWidth < 1024 ? "days" : "day hire";

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <AnimatePresence>
            {selectedSkip && (
                <motion.div
                    variants={actionBarVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={
                        "min-h-24 fixed bottom-0 bg-white p-4 w-full shadow-2xl"
                    }
                >
                    <p className="text-sm text-[#9A9EA8] text-center">
                        Imagery and information shown throughout this website
                        may not reflect the exact shape or size specification,
                        colors may vary, options and/or accessories may be
                        featured at additional cost.
                    </p>
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end">
                        <div className="flex justify-between lg:justify-start items-center lg:gap-6 mt-5 max-w-6xl w-full mx-auto">
                            <p className="text-[#626979] font-semibold lg:font-normal">
                                {selectedSkip?.size} Yard Skip
                            </p>
                            <p>
                                <span className="text-3xl font-bold mt-4 mr-1.5 text-button-selected">
                                    £{selectedSkip?.price_before_vat}
                                </span>{" "}
                                <span className="text-[#626979]">
                                    {selectedSkip?.hire_period_days}{" "}
                                    {dayHireText}
                                </span>
                            </p>
                        </div>
                        <div className="lg:max-w-52 flex gap-3 lg:gap-4 w-full">
                            <button className="bg-[#D1D5DB] hover:bg-[#e8eaee] cursor-pointer w-1/2 h-10 lg:w-20 lg:h-11 rounded-md transition-colors">
                                Back
                            </button>
                            <button className="bg-button-selected hover:bg-[#4d9079] text-white cursor-pointer w-1/2 h-10 lg:w-32 lg:h-11 rounded-md flex justify-center items-center gap-2.5 transition-colors">
                                <p>Continue</p>
                                <MoveRight
                                    className="hidden lg:block"
                                    size={18}
                                />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ActionBar;
