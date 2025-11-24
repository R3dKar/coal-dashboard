import { Card } from '@radix-ui/themes';
import EChartsReact from 'echarts-for-react';
import classes from './mass-chart.module.css';
import { useQuery } from '@tanstack/react-query';
import { getMass } from '../../api/api';
import { Loading } from '../loading/loading';
import { useMemo } from 'react';
import data from '../aqi-beijing.json';

const chartOptions = (mass?: number[], timestamp?: string[]) => {
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
      data: timestamp
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

export const MassChart = ({}: MassChartProps) => {
  // const { data, isFetching } = useQuery({ queryKey: [], queryFn: async () => getMass(storageId, pileNumber) });
  const options = useMemo(() => chartOptions(data.map(item => item[1]) as number[], data.map(item => item[0]) as string[]), [data]);

  // if (isFetching) return <Loading />

  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <h2 className={classes.header}>Тоннаж: {123}т</h2>
        <EChartsReact option={options!} className={classes.chart} />
      </div>
    </Card>
  );
};

export default MassChart;
