const SimulationTitle: React.FC<Props> = ({ title }) => {
  return <small>{title}</small>;
};

export default SimulationTitle;

type Props = {
  title: string;
};
