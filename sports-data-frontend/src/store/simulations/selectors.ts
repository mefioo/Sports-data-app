import { createSelector } from "reselect";
import { StoreSimulationType } from "./reducer";
import { selectTeams } from "../teams/selectors";
import { RootState } from "..";

export const selectSimulations = createSelector(
  (state: RootState) => state.simulation,
  (simulations: StoreSimulationType) => {
    return simulations?.items || [];
  }
);

export const selectTeamsSimulations = createSelector(
  selectSimulations,
  selectTeams,
  (simulations, teams) => {
    return simulations.map((simulation) => {
      const host = teams.find((team) => team.id === simulation.host);
      const guest = teams.find((team) => team.id === simulation.guest);

      return { host: host?.name || "Host", guest: guest?.name || "Guest" };
    });
  }
);

export const selectSimulationTitle = createSelector(
  (state: RootState) => state.simulation,
  (simulation) => {
    return simulation.title;
  }
);
