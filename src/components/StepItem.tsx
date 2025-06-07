import clsx from "clsx";
import { CircleCheck } from "lucide-react";
import type { ReactNode } from "react";

type StepItemProps = {
    icon?: ReactNode;
    text: string;
    completed?: boolean;
    selected?: boolean;
};

const StepItem = ({ icon, text, completed, selected }: StepItemProps) => {
    const getIcon = () => {
        if (completed) {
            return <CircleCheck color="#12B981" size={30} />;
        }
        return icon;
    };
    return (
        <div
            className={clsx(
                "text-[#9CA3AF] w-24 h-14",
                selected && "text-button-selected"
            )}
        >
            <div className="flex justify-center">{getIcon()}</div>
            <p className="text-sm mt-1 text-center">{text}</p>
        </div>
    );
};

export default StepItem;
