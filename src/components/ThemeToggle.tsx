import { Moon, Sun } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useDarkMode();

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow cursor-pointer transition-all duration-300 ease-in-out flex justify-center"
        >
            {isDark ? <Sun /> : <Moon />}
        </button>
    );
}
