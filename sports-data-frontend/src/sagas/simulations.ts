import { call, put } from "redux-saga/effects";
import { simulationService } from "../services/simulationService";
import { simulationActions } from "../store/simulations/reducer";

export function* fetchSimulation(): any {
  const result = yield call(simulationService.fetchSimulation);

  if (!result.error) {
    yield put(simulationActions.setSimulation({ ...result }));
  }
}
