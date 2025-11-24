import { Outlet } from "react-router";
import StorageGrid from "../../components/storage-grid/storage-grid";
import classes from './storage-page.module.css';
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/loading/loading";
import { getStorages } from '../../api/api';
import EmptyPage from "../empty-page/empty-page";

export const StoragePage = () => {
  const { data, isFetching } = useQuery({ queryKey: ['storages'], queryFn: getStorages });

  if (isFetching) return <Loading />
  if (!!data && data.storages.length === 0) return <EmptyPage />
  
  return (
    <div className={classes.container}>
      <Outlet />
      {
        data?.storages.map(storageId => <StorageGrid key={storageId} storageId={storageId} />)
      }
    </div>
  );
};

export default StoragePage;
