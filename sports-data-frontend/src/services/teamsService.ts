import axios, { AxiosResponse } from "axios";

export const fetchTeams = async (): Promise<
  AxiosResponse | ErrorResponseType
> => {
  try {
    const reponse = await axios.get("/teams");

    return reponse.data.teams;
  } catch (e: any) {
    return {
      error: e,
    };
  }
};

export const teamsService = {
  fetchTeams,
};

export type ErrorResponseType = {
  error: object;
};
