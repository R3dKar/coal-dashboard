import { NavLink } from 'react-router';
import PileCard from '../pile-card/pile-card';
import classes from './storage-grid.module.css';
import { useQuery } from '@tanstack/react-query';
import { getPiles } from '../../api/api';
import { Loading } from '../loading/loading';

export interface StorageGridProps {
  storageId: number
};

export const StorageGrid = ({ storageId }: StorageGridProps) => {
  const { data, isFetching } = useQuery({ queryKey: ['storages', storageId, 'piles'], queryFn: async () => getPiles(storageId) });

  if (isFetching) return <Loading />

  return (
    <section className={classes.container}>
      <h1 className={classes.header}>Склад #{storageId}</h1>
      <div className={classes.grid}>
        {
          data?.piles?.map(pile => (
            <NavLink key={pile.number} to={`/piles/${storageId}/${pile.number}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={classes.link}>
              {({ isActive }) => <PileCard active={isActive} {...pile} />}
            </NavLink>
          ))
        }
      </div>
    </section>
  );
};

export default StorageGrid;
