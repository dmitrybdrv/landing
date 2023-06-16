import {RootState} from "./store.ts";

export const messageSelector = (state: RootState) => state.reducer.messages