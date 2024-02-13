import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SimulationTitle from "../SimulationTitle";

test("renders title", () => {
  const { getByText } = render(<SimulationTitle title="Title" />);

  expect(getByText(/Title/i)).toBeInTheDocument();
});
