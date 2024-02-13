import { createSelector } from "reselect";
import { StoreTeamType } from "./reducer";
import { RootState } from "..";

export const selectTeams = createSelector(
  (state: RootState) => state.teams,
  (teams: StoreTeamType) => {
    return teams.items;
  }
);
