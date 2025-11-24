import { Spinner } from '@radix-ui/themes';
import classes from './loading.module.css';

export const Loading = () => {
  return (
    <div className={classes.container}>
      <Spinner size='3' />
    </div>
  );
}
