import React, { useMemo } from "react";
import FootballMatchContent from "../Match/FootballMatchContent";

const SimulationEvents: React.FC<Props> = ({ events }) => {
  const totalGoals = useMemo(() => {
    return events.reduce((acc: number, event: FootballMatchType) => {
      return acc + event.hostGoals + event.guestGoals;
    }, 0);
  }, [events]);

  return (
    <div className="mt-4 px-4">
      {events.map((event: EventType, index: number) => {
        return (
          <FootballMatchContent
            key={`${index}`}
            host={event.host}
            guest={event.guest}
            hostGoals={event.hostGoals}
            guestGoals={event.guestGoals}
          />
        );
      })}
      <div className="text-end">
        <small>{`Total goals: ${totalGoals}`}</small>
      </div>
    </div>
  );
};

export default SimulationEvents;

type Props = {
  events: EventType[];
};

export type FootballMatchType = {
  host: string;
  guest: string;
  hostGoals: number;
  guestGoals: number;
};

export type EventType = FootballMatchType;
