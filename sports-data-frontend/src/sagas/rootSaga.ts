import { takeEvery } from "redux-saga/effects";
import { TeamsActions } from "../store/teams/actions";
import { fetchTeams } from "./teams";
import { SimulationActions } from "../store/simulations/actions";
import { fetchSimulation } from "./simulations";

export function* watcherSaga() {
  yield takeEvery(TeamsActions.FETCH_START, fetchTeams);
  yield takeEvery(SimulationActions.FETCH_START, fetchSimulation);
}
