import { Card, Progress } from '@radix-ui/themes';
import { DoubleArrowDownIcon, DoubleArrowUpIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import classes from './pile-card.module.css';

export interface PileCardProps {
  active?: boolean,
  number: number,
  temperature: number,
  temperature_rate: -2 | -1 | 0 | 1 | 2,
  days: number,
  coal_type: string,
  inflamation_prediction: number
};

export const PileCard = ({ active, ...data }: PileCardProps) => {
  // const data = {
  //   number: 1,
  //   temperature: 32,
  //   temperature_rate: -1 as (-2 | -1 | 0 | 1 | 2),
  //   days: 119,
  //   coal_type: 'A1',
  //   inflamation_prediction: 0.4,
  // };

  const predictionStatus = (data.inflamation_prediction < 0.5) ? 'ok' : (data.inflamation_prediction < 0.75) ? 'warning' : 'alert';

  const progressBarColor = {
    'ok': 'green',
    'warning': 'yellow',
    'alert': 'red'
  }[predictionStatus] as ('green' | 'yellow' | 'red');

  const cardClasses = clsx([
    classes.card,
    active && classes.card_active,
    predictionStatus === 'warning' && classes.card_warning,
    predictionStatus === 'alert' && classes.card_alert
  ]);

  let temperatureRateIcon: ReactNode = null;
  switch (data.temperature_rate) {
    case -2:
      temperatureRateIcon = <DoubleArrowDownIcon color='green' />;
      break;
    case -1:
      temperatureRateIcon = <ChevronDownIcon color='green' />;
      break;
    case 1:
      temperatureRateIcon = <ChevronUpIcon color='red' />;
      break;
    case 2:
      temperatureRateIcon = <DoubleArrowUpIcon color='red' />;
      break;
  }

  return (
    <Card className={cardClasses}>
      <h2 className={classes.number}>#{data.number}</h2>

      <p className={classes.prediction}>Шанс возгорания (3 дня)</p>
      <Progress value={data.inflamation_prediction * 100} color={progressBarColor} className={classes.progress} />

      <p className={classes.metric}>Температура: <span className={classes.metric_value}>{Math.floor(data.temperature * 10) / 10} C°</span>{temperatureRateIcon}</p>
      <p className={classes.metric}>Возраст: <span className={classes.metric_value}>{data.days} дн</span></p>
      <p className={classes.metric}>Тип угля: <span className={classes.metric_value}>{data.coal_type}</span></p>
    </Card>
  );
};

export default PileCard;
