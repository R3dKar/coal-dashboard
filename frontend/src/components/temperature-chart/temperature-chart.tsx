import { Card } from '@radix-ui/themes';
import EChartsReact from 'echarts-for-react';
import classes from './temperature-chart.module.css';
import { useQuery } from '@tanstack/react-query';
import { getTemperature } from '../../api/api';
import { Loading } from '../loading/loading';
import { useMemo } from 'react';
import data from '../aqi-beijing.json';

const chartOptions = (temperature?: number[], timestamp?: string[]) => {
  // if (!temperature || !timestamp) return null;

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
      data: timestamp
    },
    series: {
      name: 'Температура',
      type: 'line',
      data: temperature?.map(item => item*0.2)
    }
  };
};

export interface TemperatureChartProps {
  storageId: number,
  pileNumber: number
};

export const TemperatureChart = ({}: TemperatureChartProps) => {
  // const { data, isFetching } = useQuery({ queryKey: ['storages', storageId, 'piles', pileNumber, 'temperature'], queryFn: async () => getTemperature(storageId, pileNumber) });
  const options = useMemo(() => chartOptions(data.map(item => item[1]) as number[], data.map(item => item[0]) as string[]), [data]);

  // if (isFetching) return <Loading />

  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <h2 className={classes.header}>Температура: {33.4}°C </h2>
        <EChartsReact option={options!} className={classes.chart} />
      </div>
    </Card>
  );
};

export default TemperatureChart;
