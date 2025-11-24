import { Card } from '@radix-ui/themes';
import EChartsReact from 'echarts-for-react';
import classes from './mass-chart.module.css';
import { useQuery } from '@tanstack/react-query';
import { getMass } from '../../api/api';
import { Loading } from '../loading/loading';
import { useMemo } from 'react';

const chartOptions = (mass?: number[], timestamp?: number[]) => {
  if (!mass || !timestamp) return null;

  return {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '25%',
      top: '5%'
    },
    yAxis: {},
    dataZoom: [
      {
        type: 'slider'
      },
      {
        type: 'inside'
      }
    ],
    xAxis: {
      data: timestamp.map(item => new Date(item * 1000).toLocaleDateString())
    },
    series: {
      name: 'Тоннаж',
      type: 'line',
      data: mass
    }
  };
};

export interface MassChartProps {
  storageId: number,
  pileNumber: number
};

export const MassChart = ({ storageId, pileNumber }: MassChartProps) => {
  const { data, isFetching } = useQuery({ queryKey: [], queryFn: async () => getMass(storageId, pileNumber) });
  const options = useMemo(() => chartOptions(data?.mass, data?.timestamp), [data]);

  if (isFetching) return <Loading />

  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <h2 className={classes.header}>Тоннаж: {Math.floor(data?.mass.at(-1)!)}т</h2>
        <EChartsReact option={options!} className={classes.chart} />
      </div>
    </Card>
  );
};

export default MassChart;
