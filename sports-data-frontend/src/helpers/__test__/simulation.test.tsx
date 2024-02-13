import "@testing-library/jest-dom";
import { getSimulationButtonText } from "../simulation";
import { simulationTypes } from "../../contants/simulation";

test("returns proper button text", () => {
  const text = getSimulationButtonText(simulationTypes.FINISHED);

  expect(text).toEqual("Restart");
});

test("returns proper button text", () => {
  const text = getSimulationButtonText(simulationTypes.ONGOING);

  expect(text).toEqual("Finish");
});

test("returns proper button text", () => {
  const text = getSimulationButtonText(simulationTypes.NOT_STARTED);

  expect(text).toEqual("Start");
});
