import { useEffect, useState, type ReactNode } from "react";
import type { Skip } from "../shared/types/Skip";
import { SelectedSkipContext } from "../contexts/SelectedSkipContext";

export const SelectedSkipProvider = ({ children }: { children: ReactNode }) => {
    const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem("selectedSkip");
        if (stored) {
            try {
                setSelectedSkip(JSON.parse(stored));
            } catch (err) {
                console.error("Failed to parse selected skip:", err);
            }
        }
    }, []);

    useEffect(() => {
        if (selectedSkip) {
            localStorage.setItem("selectedSkip", JSON.stringify(selectedSkip));
        } else {
            localStorage.removeItem("selectedSkip");
        }
    }, [selectedSkip]);

    return (
        <SelectedSkipContext.Provider value={{ selectedSkip, setSelectedSkip }}>
            {children}
        </SelectedSkipContext.Provider>
    );
};
