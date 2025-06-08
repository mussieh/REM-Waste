import clsx from "clsx";
import { ChevronRight } from "lucide-react";

type SkipButtonProps = {
    isSelected: boolean;
};

const SkipButton = ({ isSelected }: SkipButtonProps) => {
    const buttonClass = clsx(
        "p-3 mt-8 w-full h-12 flex justify-center items-center rounded-lg cursor-pointer transition-colors",
        isSelected
            ? "bg-button-selected text-white"
            : "bg-button-un-selected dark:bg-[#4B5563] text-[#626979] dark:text-[#DCDEE2]"
    );

    return (
        <button className={buttonClass}>
            <p className="font-semibold">
                {isSelected ? "Selected" : "Select This Skip"}
            </p>
            <ChevronRight
                className={clsx(isSelected ? "hidden" : "")}
                size={30}
            />
        </button>
    );
};

export default SkipButton;
