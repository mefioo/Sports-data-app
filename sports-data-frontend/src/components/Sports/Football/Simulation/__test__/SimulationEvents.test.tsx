import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SimulationEvents, { FootballMatchType } from "../SimulationEvents";

test("Renders proper amount of total goals", () => {
  const events: FootballMatchType[] = [
    {
      host: "Some host",
      guest: "Some guest",
      hostGoals: 2,
      guestGoals: 4,
    },
  ];

  const { getByText } = render(<SimulationEvents events={events} />);

  expect(getByText("Total goals: 6")).toBeInTheDocument();
});

test("Renders proper amount of total goals", () => {
  const events: FootballMatchType[] = [
    {
      host: "Some host",
      guest: "Some guest",
      hostGoals: 0,
      guestGoals: 0,
    },
  ];

  const { getByText } = render(<SimulationEvents events={events} />);

  expect(getByText("Total goals: 0")).toBeInTheDocument();
});

test("Renders proper amount of total goals", () => {
  const events: FootballMatchType[] = [
    {
      host: "Some host",
      guest: "Some guest",
      hostGoals: 1,
      guestGoals: 2,
    },
    {
      host: "Some host 2",
      guest: "Some guest 2",
      hostGoals: 3,
      guestGoals: 4,
    },
  ];

  const { getByText } = render(<SimulationEvents events={events} />);

  expect(getByText("Total goals: 10")).toBeInTheDocument();
});

test("Renders proper amount of total goals when no events provided", () => {
  const events: FootballMatchType[] = [];

  const { getByText } = render(<SimulationEvents events={events} />);

  expect(getByText("Total goals: 0")).toBeInTheDocument();
});
