import { Card, CardBody, CardTitle } from "reactstrap";
import "./SimulationView.css";
import SimulationTitle from "../../components/Sports/Football/Simulation/SimulationTitle";
import SimulationContent from "../../components/Sports/Football/Simulation/SimaultionContent";
import { useSelector } from "react-redux";
import { selectSimulationTitle } from "../../store/simulations/selectors";

const SimulationView = () => {
  const title = useSelector(selectSimulationTitle);

  return (
    <div className="simulation-view">
      <Card className="w-25 mt-4">
        <CardTitle>
          <SimulationTitle title={title} />
        </CardTitle>
        <CardBody>
          <SimulationContent />
        </CardBody>
      </Card>
    </div>
  );
};

export default SimulationView;
