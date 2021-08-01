import { combineReducers } from "redux";

import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>; //this is to help redux type the global state so type errors do not happen
