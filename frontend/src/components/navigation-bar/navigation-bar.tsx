import { NavLink } from 'react-router';
import classes from './navigation-bar.module.css';
import clsx from 'clsx';

const linkClass = ({ isActive }: { isActive: boolean }) => clsx([classes.link, isActive && classes.link_active]);

export const NavigationBar = () => {
  return (
    <nav className={classes.container}>
      <img className={classes.logo} src='/logo.png' />
      <NavLink to='/piles' className={linkClass}>Штабели</NavLink>
      <NavLink to='/upload' className={linkClass}>Загрузка данных</NavLink>
      <NavLink to='/model' className={linkClass}>Метрики модели</NavLink>
    </nav>
  );
};

export default NavigationBar;
