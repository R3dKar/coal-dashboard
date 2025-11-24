import { Card } from '@radix-ui/themes';
import EChartsReact from 'echarts-for-react';
import classes from './temperature-chart.module.css';
import { useQuery } from '@tanstack/react-query';
import { getTemperature } from '../../api/api';
import { Loading } from '../loading/loading';
import { useMemo } from 'react';

const chartOptions = (temperature?: number[], timestamp?: number[]) => {
  if (!temperature || !timestamp) return null;

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
    visualMap: {
      show: false,
      pieces: [
        {
          gt: 0,
          lte: 40,
          color: '#93ce07'
        },
        {
          gt: 40,
          lte: 60,
          color: '#fbdb0f'
        },
        {
          gt: 60,
          color: '#ff0000'
        }
      ],
      outOfRange: {
        color: 'gray'
      }
    },
    xAxis: {
      data: timestamp.map(item => (new Date(item * 1000)).toLocaleDateString())
    },
    series: {
      name: 'Температура',
      type: 'line',
      data: temperature
    }
  };
};

export interface TemperatureChartProps {
  storageId: number,
  pileNumber: number
};

export const TemperatureChart = ({ storageId, pileNumber }: TemperatureChartProps) => {
  const { data, isFetching } = useQuery({ queryKey: ['storages', storageId, 'piles', pileNumber, 'temperature'], queryFn: async () => getTemperature(storageId, pileNumber) });
  const options = useMemo(() => chartOptions(data?.temperature, data?.timestamp), [data]);

  if (isFetching) return <Loading />

  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <h2 className={classes.header}>Температура: {Math.floor(data?.temperature.at(-1)! * 10) / 10}°C </h2>
        <EChartsReact option={options!} className={classes.chart} />
      </div>
    </Card>
  );
};

export default TemperatureChart;
