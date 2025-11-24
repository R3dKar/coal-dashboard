import { Card } from '@radix-ui/themes';
import EChartsReact from 'echarts-for-react';
import classes from './temperature-chart.module.css';
import data from '../aqi-beijing.json';

const chartOptions = {
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
    data: data.map(item => item[0])
  },
  series: {
    name: 'Температура',
    type: 'line',
    data: data.map(item => 0.2 * item[1])
  }
};

export const TemperatureChart = () => {
  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <h2 className={classes.header}>Температура: {62.1}°C </h2>
        <EChartsReact option={chartOptions} className={classes.chart} />
      </div>
    </Card>
  );
};

export default TemperatureChart;
