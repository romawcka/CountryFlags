import { RootState } from "store";

// selectors
export const selectCurrentCountry = (state: RootState) => state.details.currentCountry;
export const selectDetails = (state: RootState) => state.details;
export const selectNeighbors = (state: RootState) => state.details.neighbors;
