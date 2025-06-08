import { useState } from "react";
import type { Skip } from "../shared/types/Skip";
import SkipButton from "./SkipButton";
import clsx from "clsx";
import { TriangleAlert } from "lucide-react";
import Badge from "./Badge";
import { useSelectedSkipContext } from "../hooks/useSelectedSkipContext";

type SkipCardProps = {
    skip: Skip;
};

const SkipCard = ({ skip }: SkipCardProps) => {
    const [loaded, setLoaded] = useState(false);

    const image = new URL(
        `../assets/images/${skip.size}-skip.webp`,
        import.meta.url
    ).href;

    const { selectedSkip, setSelectedSkip } = useSelectedSkipContext();

    const isSelected = skip.id === selectedSkip?.id;

    const handleSelect = () => {
        setSelectedSkip(skip.id === selectedSkip?.id ? null : skip);
    };

    return (
        <div
            onClick={handleSelect}
            className={clsx(
                "bg-white rounded-2xl p-4 md:p-8 shadow-lg cursor-pointer border-2 transition-all duration-300 ease-in-out",
                isSelected
                    ? "border-button-selected"
                    : "border-transparent hover:border-button-selected/50"
            )}
        >
            <div className="relative">
                {loaded && <Badge size={skip.size} />}
                <img
                    className={clsx(
                        "w-full h-auto rounded-2xl object-cover",
                        loaded ? "block" : "hidden"
                    )}
                    src={image}
                    alt={`${skip.size} Yard Skip`}
                    onLoad={() => setLoaded(true)}
                />
                {!loaded && (
                    <div className="w-full h-[12.5rem] bg-gray-200 rounded-2xl animate-pulse" />
                )}
            </div>
            <p className="text-xl text-[#353B45] mt-4 font-bold">
                {skip.size} Yard Skip
            </p>
            <p className="text-sm text-[#9A9EA8]">
                {skip.hire_period_days} day hire period
            </p>
            {!skip.allowed_on_road && (
                <div className="bg-warning-background md:max-w-60 w-full h-10 mt-8 rounded-md flex items-center gap-3">
                    <TriangleAlert className="ml-4" color="#F49D00" size={20} />
                    <p className="text-xs text-[#820000]">
                        Not Allowed On The Road
                    </p>
                </div>
            )}
            <p className="text-3xl font-bold mt-4 text-button-selected">
                £{skip.price_before_vat}
            </p>
            <SkipButton isSelected={isSelected} />
        </div>
    );
};

export default SkipCard;
