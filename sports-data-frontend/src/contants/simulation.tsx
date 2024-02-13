export const simulationTypes = {
  NOT_STARTED: "not_started",
  ONGOING: "ongoing",
  FINISHED: "finished",
};

type Keys = keyof typeof simulationTypes;
export type SimulationStateTypes = (typeof simulationTypes)[Keys];

export type SimulationButtonTextTypes = "Restart" | "Finish" | "Start";
