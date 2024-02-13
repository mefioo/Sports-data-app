const FootballMatchContent: React.FC<Props> = ({
  host,
  guest,
  hostGoals,
  guestGoals,
}) => {
  return (
    <div className="flex-between mb-3">
      <div>
        {host} vs {guest}
      </div>
      <div>{`${hostGoals} : ${guestGoals}`}</div>
    </div>
  );
};

export default FootballMatchContent;

type Props = {
  host: string;
  guest: string;
  hostGoals: number;
  guestGoals: number;
};
