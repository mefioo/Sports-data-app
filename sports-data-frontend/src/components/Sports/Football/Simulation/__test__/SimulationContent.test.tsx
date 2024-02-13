import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SimulationContent from "../SimaultionContent";
import { Provider } from "react-redux";
import store from "../../../../../store";

test("renders button", () => {
  const { getByRole } = render(
    <Provider store={store}>
      <SimulationContent />
    </Provider>
  );

  expect(getByRole("button")).toBeInTheDocument();
});

test("renders initial button text", () => {
  const { getByText } = render(
    <Provider store={store}>
      <SimulationContent />
    </Provider>
  );

  expect(getByText("Start")).toBeInTheDocument();
});

test("renders proper button text after clicking button", () => {
  const { getByRole, getByText } = render(
    <Provider store={store}>
      <SimulationContent />
    </Provider>
  );

  fireEvent.click(getByRole("button"));
  expect(getByText("Finish")).toBeInTheDocument();
});

test("renders proper button text after double clicking button", () => {
  const { getByRole, getByText } = render(
    <Provider store={store}>
      <SimulationContent />
    </Provider>
  );

  fireEvent.click(getByRole("button"));
  fireEvent.click(getByRole("button"));
  expect(getByText("Restart")).toBeInTheDocument();
});
