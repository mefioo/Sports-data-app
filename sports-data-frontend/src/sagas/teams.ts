import { call, put } from "redux-saga/effects";
import { teamsService } from "../services/teamsService";
import { teamActions } from "../store/teams/reducer";

export function* fetchTeams(): any {
  const result = yield call(teamsService.fetchTeams);

  if (!result.error) {
    yield put(teamActions.setTeams({ items: result }));
  }
}
