import { createSlice } from "@reduxjs/toolkit";

export type StoreSimulationItemType = { guest: number; host: number };
export type StoreSimulationItemTranslatedType = { guest: string; host: string };
export type StoreSimulationType = {
  title: string;
  items: StoreSimulationItemType[];
};

const simulationSlice = createSlice({
  name: "simulation",
  initialState: { items: [], title: "" },
  reducers: {
    setSimulation: (state, action) => {
      state.items = action.payload.items;
      state.title = action.payload.title;
    },
  },
});

export default simulationSlice;
export const simulationActions = simulationSlice.actions;
