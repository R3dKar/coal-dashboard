import { Card } from '@radix-ui/themes';
import EChartsReact from 'echarts-for-react';
import classes from './mass-chart.module.css';
import data from '../aqi-beijing.json';

const options = {
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
    data: data.map(item => item[0])
  },
  series: {
    name: 'Тоннаж',
    type: 'line',
    data: data.map(item => item[1])
  }
};

export const MassChart = () => {
  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <h2 className={classes.header}>Тоннаж: {123}т</h2>
        <EChartsReact option={options} className={classes.chart} />
      </div>
    </Card>
  );
};

export default MassChart;
