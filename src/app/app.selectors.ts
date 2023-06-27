import {RootState} from "./store.ts";

export const messageSelector = (state: RootState) => state.reducer.message
export const errorMessageSelector = (state: RootState) => state.reducer.error