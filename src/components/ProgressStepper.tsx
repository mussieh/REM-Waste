import { Calendar, CreditCard, Shield, Truck } from "lucide-react";
import StepItem from "./StepItem";
import ThemeToggle from "./ThemeToggle";

const ProgressStepper = () => {
    return (
        <div className="hidden md:flex md:justify-center md:items-center">
            <StepItem text="Postcode" completed={true} />
            <hr className="border-button-selected border-2 w-28" />
            <StepItem text="Waste Type" completed={true} />
            <hr className="border-button-selected border-2 w-28" />
            <StepItem
                icon={<Truck size={30} />}
                text="Select Skip"
                selected={true}
            />
            <hr className="border-button-selected border-2 w-28" />
            <StepItem icon={<Shield size={30} />} text="Permit Check" />
            <hr className="border-button-selected border-2 w-28" />
            <StepItem icon={<Calendar size={30} />} text="Choose Date" />
            <hr className="border-button-selected border-2 w-28" />
            <StepItem icon={<CreditCard size={30} />} text="Payment" />
            <span className="ml-20"></span>
            <ThemeToggle />
        </div>
    );
};

export default ProgressStepper;
