import {
    Calendar,
    CircleCheck,
    CreditCard,
    Shield,
    Truck,
    X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const menuVariants = {
    hidden: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.2 },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.2 },
    },
};

const MobileNav = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    return (
        <nav className="border-gray-200 relative">
            <div className="flex justify-between">
                <p></p>
                <button
                    onClick={() => setIsNavOpen((isOpen) => !isOpen)}
                    className="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
                >
                    {isNavOpen ? (
                        <X size={30} />
                    ) : (
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    )}
                </button>
            </div>

            <AnimatePresence>
                {isNavOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className={
                            "absolute right-0 text-[#6B7280] bg-white max-w-[20rem] w-full rounded-2xl z-10 shadow-lg mt-2 md:hidden"
                        }
                    >
                        <ul className="flex flex-col gap-4 p-4 font-medium">
                            <li className="flex items-center gap-2 hover:bg-[#F3F4F6] p-2 rounded-lg cursor-pointer">
                                <CircleCheck color="#12B981" size={30} />
                                <a href="#" className="">
                                    Postcode
                                </a>
                            </li>
                            <li className="flex items-center gap-2 hover:bg-[#F3F4F6] p-2 rounded-lg cursor-pointer">
                                <CircleCheck color="#12B981" size={30} />
                                <a href="#" className="">
                                    Waste Type
                                </a>
                            </li>
                            <li className="cursor-pointer">
                                <a
                                    href="#"
                                    className="bg-button-selected text-white p-2 rounded-lg flex items-center gap-2"
                                >
                                    <Truck size={30} />
                                    Select Skip
                                </a>
                            </li>
                            <li className="flex items-center gap-2 hover:bg-[#F3F4F6] p-2 rounded-lg cursor-pointer">
                                <Shield size={30} />
                                <a href="#" className="">
                                    Permit Check
                                </a>
                            </li>
                            <li className="flex items-center gap-2 hover:bg-[#F3F4F6] p-2 rounded-lg cursor-pointer">
                                <Calendar size={30} />
                                <a href="#" className="">
                                    Choose Date
                                </a>
                            </li>
                            <li className="flex items-center gap-2 hover:bg-[#F3F4F6] p-2 rounded-lg cursor-pointer">
                                <CreditCard size={30} />
                                <a href="#" className="">
                                    Payment
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default MobileNav;
