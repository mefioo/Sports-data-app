import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import teamsSlice from "./teams/reducer";
import { watcherSaga } from "../sagas/rootSaga";
import createSagaMiddleware from "redux-saga";
import simulationSlice from "./simulations/reducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    teams: teamsSlice.reducer,
    simulation: simulationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
