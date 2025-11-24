import { useParams } from 'react-router';
import classes from './pile-data.module.css';
import TemperatureChart from '../temperature-chart/temperature-chart';
import MassChart from '../mass-chart/mass-chart';
import ArchiveChart from '../archive-chart/archive-chart';
import TableChart from '../table-chart/table-chart';
import PredictionChart from '../prediction-chart/prediction-chart';

export const PileData = () => {
  const { id, number } = useParams();

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Склад #{id} Штабель #{number}</h1>
      <section className={classes.grid}>
        <TableChart />
        <TemperatureChart />
        <ArchiveChart />
        <MassChart />
        <PredictionChart />
      </section>
    </div>
  );
};

export default PileData;
