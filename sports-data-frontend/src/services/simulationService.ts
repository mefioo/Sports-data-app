import axios, { AxiosResponse } from "axios";
import { ErrorResponseType } from "./teamsService";

export const fetchSimulation = async (): Promise<
  GetSimulationResponseType | ErrorResponseType
> => {
  try {
    const response = await axios.get("/simulations");

    return { title: response.data.title, items: response.data.simulations };
  } catch (e: any) {
    return {
      error: e,
    };
  }
};

export const simulationService = {
  fetchSimulation,
};

type GetSimulationResponseType = {
  title: string;
  items: AxiosResponse;
};
