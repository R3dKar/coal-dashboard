import { Card } from '@radix-ui/themes';
import EChartsReact from 'echarts-for-react';
import * as echarts from 'echarts';
import classes from './archive-chart.module.css';
import data from '../aqi-beijing.json';
import { useQuery } from '@tanstack/react-query';

const options = {
  tooltip: {
    position: 'top',
    formatter: (point: any) => {
      const format = echarts.time.format(point.data[0], '{yyyy}-{MM}-{dd}', false);
      return `Дата акта: ${format}<br>Максимальная температура: ${point.data[1]}°C<br>Смена: ${219}`;
    }
  },
  visualMap: {
    calculable: true,
    orient: 'vertical',
    left: '670',
    top: 'center'
  },

  calendar: [
    {
      orient: 'vertical',
      range: '2010',
      cellSize: [20, 'auto']
    },
    {
      left: 300,
      orient: 'vertical',
      range: '2011',
      cellSize: [20, 'auto']
    },
    {
      left: 520,
      orient: 'vertical',
      range: '2012',
      cellSize: [20, 'auto']
    }
  ],
  series: [
    {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      calendarIndex: 0,
      data: data.filter(item => new Date(item[0]).getUTCFullYear() === 2010)
    },
    {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      calendarIndex: 1,
      data: data.filter(item => new Date(item[0]).getUTCFullYear() === 2011)
    },
    {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      calendarIndex: 2,
      data: data.filter(item => new Date(item[0]).getUTCFullYear() === 2012)
    }
  ]
};

export interface AcrchiveChartProps {
  storageId: number,
  pileNumber: number
};

export const ArchiveChart = () => {
  // const { data, isFetching } = useQuery({ queryKey: [], queryFn: async () => }) // TODO: api endpoint for fires

  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <h2 className={classes.header}>Архив инцидентов</h2>
        <EChartsReact option={options} className={classes.chart} />
      </div>
    </Card>
  );
};

export default ArchiveChart;
