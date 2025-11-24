import EChartsReact from 'echarts-for-react';
import classes from './prediction-chart.module.css';
import { Card } from '@radix-ui/themes';
import data from '../aqi-beijing.json';

const shrinkedData = data.slice(-7);
const predictionDate = ['2015-02-25', '2015-02-26', '2015-02-27'];
const predicitonData = [37, 84, 20];

const options = {
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '25%',
    top: '10%'
  },
  legend: {
    data: ['Реальная', 'Прогноз']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C',
    }
  },
  xAxis: {
    data: shrinkedData.map(item => item[0]).concat(predictionDate)
  },
  series: [
    {
      name: 'Реальная',
      type: 'line',
      data: shrinkedData.map(item => item[1] * 0.7 + 20 * Math.sin(item[1])),
      markPoint: {
        data: [
          { type: 'max', name: 'Максимум' },
          { type: 'min', name: 'Минимум' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Средняя' }]
      }
    },
    {
      name: 'Прогноз',
      type: 'line',
      data: shrinkedData.map(item => item[1]).concat(predicitonData),
      markPoint: {
        data: [
          { type: 'max', name: 'Максимум' },
          { type: 'min', name: 'Минимум' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Средняя' }]
      }
    }
  ]
};

export const PredictionChart = () => {
  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <h2 className={classes.header}>Прогноз возгораний</h2>
        <EChartsReact option={options} className={classes.chart} />
      </div>
    </Card>
  );
};

export default PredictionChart;
