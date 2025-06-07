import { useContext } from "react";
import type { Skip } from "../shared/types/Skip";
import SkipButton from "./SkipButton";
import { SelectedSkipContext } from "../contexts/SelectedSkipContext";
import clsx from "clsx";
import { TriangleAlert } from "lucide-react";
import Badge from "./Badge";

type SkipCardProps = {
    skip: Skip;
};

const SkipCard = ({ skip }: SkipCardProps) => {
    const image = new URL(
        `../assets/images/${skip.size}-skip.png`,
        import.meta.url
    ).href;

    const { selectedSkip, setSelectedSkip } = useContext(SelectedSkipContext);

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
                <Badge size={skip.size} />
                <img
                    className="w-[40rem] h-[14rem] rounded-2xl"
                    src={image}
                    alt={`${skip.size} Yard Skip`}
                />
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
