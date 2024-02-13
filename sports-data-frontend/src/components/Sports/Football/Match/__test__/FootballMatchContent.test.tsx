import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FootballMatchContent from "../FootballMatchContent";

test("renders football match teams properly", () => {
  const { getByText } = render(
    <FootballMatchContent
      host="Mexico"
      guest="Poland"
      hostGoals={0}
      guestGoals={3}
    />
  );

  expect(getByText("Mexico vs Poland")).toBeInTheDocument();
});

test("renders football match score properly", () => {
  const { getByText } = render(
    <FootballMatchContent
      host="Mexico"
      guest="Poland"
      hostGoals={0}
      guestGoals={3}
    />
  );

  expect(getByText("0 : 3")).toBeInTheDocument();
});
