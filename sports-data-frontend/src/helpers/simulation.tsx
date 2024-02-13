import { FootballMatchType } from "../components/Sports/Football/Simulation/SimulationEvents";
import {
  SimulationButtonTextTypes,
  SimulationStateTypes,
  simulationTypes,
} from "../contants/simulation";
import { StoreSimulationItemTranslatedType } from "../store/simulations/reducer";

export const getSimulationButtonText = (
  type: SimulationStateTypes
): SimulationButtonTextTypes => {
  switch (type) {
    case simulationTypes.FINISHED:
      return "Restart";
    case simulationTypes.ONGOING:
      return "Finish";
    case simulationTypes.NOT_STARTED:
    default:
      return "Start";
  }
};

export const setDefaultSimulations = (
  items: StoreSimulationItemTranslatedType[]
): FootballMatchType[] => {
  return items.map((item) => ({ ...item, hostGoals: 0, guestGoals: 0 }));
};
