import { createContext } from "react";
import type { Skip } from "../shared/types/Skip";

export type SelectedSkipState = {
    selectedSkip: Skip | null;
};

export type SelectedSkipContextValue = SelectedSkipState & {
    setSelectedSkip: (skip: Skip | null) => void;
};

export const SelectedSkipContext = createContext<SelectedSkipContextValue>({
    selectedSkip: null,
    setSelectedSkip: () => {},
});
