import { Button } from '@radix-ui/themes';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import classes from './empty-page.module.css';
import { NavLink } from 'react-router';

export const EmptyPage = () => {
  return (
    <div className={classes.container}>
      <img src='/empty.png' className={classes.image} />
      <h1 className={classes.text}>Данные отсутствуют</h1>
      <NavLink to='/upload'>
        <Button variant='outline' highContrast color='gray' size='4' className={classes.button}>
          Загрузить <ArrowRightIcon />
        </Button>
      </NavLink>
    </div>
  );
};

export default EmptyPage;
