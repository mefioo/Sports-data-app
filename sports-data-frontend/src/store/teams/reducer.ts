import { createSlice } from "@reduxjs/toolkit";

export type StoreTeamType = {
  items: {
    id: number;
    name: string;
  }[];
};

const teamsSlice = createSlice({
  name: "teams",
  initialState: { items: [] },
  reducers: {
    setTeams: (state, action) => {
      state.items = action.payload.items;
    },
  },
});

export default teamsSlice;
export const teamActions = teamsSlice.actions;
