import { useEffect, useMemo, useState } from "react";
import { simulationTypes } from "../../../../contants/simulation";
import { Button } from "reactstrap";
import {
  getSimulationButtonText,
  setDefaultSimulations,
} from "../../../../helpers/simulation";
import SimulationEvents, {
  EventType,
  FootballMatchType,
} from "./SimulationEvents";
import { useDispatch, useSelector } from "react-redux";
import { TeamsActions } from "../../../../store/teams/actions";
import { SimulationActions } from "../../../../store/simulations/actions";
import { selectTeamsSimulations } from "../../../../store/simulations/selectors";
import openSocket from "socket.io-client";

const initialState: FootballMatchType[] = [];

const SimulationContent: React.FC = () => {
  const [simualtionState, setSimulationState] = useState(
    simulationTypes.NOT_STARTED
  );
  const [simulationItems, setSimulationItems] = useState(initialState);

  const simulations = useSelector(selectTeamsSimulations);

  const dispatch = useDispatch();
  let interval: any = null;

  const buttonText = useMemo(() => {
    return getSimulationButtonText(simualtionState);
  }, [simualtionState]);

  useEffect(() => {
    dispatch({ type: SimulationActions.FETCH_START });
    dispatch({ type: TeamsActions.FETCH_START });
  }, []);

  useEffect(() => {
    setSimulationItems(setDefaultSimulations(simulations));
  }, [simulations]);

  useEffect(() => {
    openSocket("http://localhost:3001", {
      withCredentials: true,
    });
  }, []);

  useEffect(() => {
    let count: number = 0;

    if (simualtionState === simulationTypes.ONGOING) {
      interval = setInterval(() => {
        count += 1;

        if (!(count % 10)) {
          const index: number = Math.floor(Math.random() * 3);
          const host: boolean = !!Math.floor(Math.random() * 2);

          const _items: EventType[] = [...simulationItems];

          if (host) {
            _items[index].hostGoals += 1;
          } else {
            _items[index].guestGoals += 1;
          }

          setSimulationItems(_items);
        }

        if (count === 90) {
          clearInterval(interval);
          setSimulationState(simulationTypes.FINISHED);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [simualtionState]);

  const simulationButtonClickHandler = () => {
    if (
      simualtionState === simulationTypes.NOT_STARTED ||
      simualtionState === simulationTypes.FINISHED
    ) {
      setSimulationItems(setDefaultSimulations(simulations));
      setSimulationState(simulationTypes.ONGOING);
    } else {
      setSimulationState(simulationTypes.FINISHED);
    }
  };

  return (
    <>
      <Button outline onClick={simulationButtonClickHandler}>
        {buttonText}
      </Button>
      <SimulationEvents events={simulationItems} />
    </>
  );
};

export default SimulationContent;
