import { useContext } from "react";
import { SelectedSkipContext } from "../contexts/SelectedSkipContext";

export const useSelectedSkipContext = () => {
    const selectedSkipContext = useContext(SelectedSkipContext);

    if (selectedSkipContext === null) {
        throw new Error(
            "SelectedSkipContext is null - that should not be the case"
        );
    }

    return selectedSkipContext;
};
