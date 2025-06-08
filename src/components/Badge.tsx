type BadgeProps = {
    size: number;
};

const Badge = ({ size }: BadgeProps) => {
    return (
        <div className="absolute right-6 top-[-0.7rem] md:top-[-1rem] rounded-2xl w-20 h-8 bg-button-selected flex justify-center items-center">
            <p className="text-white dark:text-[#101827] text-base">
                {size} Yards
            </p>
        </div>
    );
};

export default Badge;
