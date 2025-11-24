import { Card, Table } from '@radix-ui/themes';
import classes from './table-chart.module.css';
import { getTransportation } from '../../api/api';
import { useQuery } from '@tanstack/react-query';
import { Loading } from '../loading/loading';

export interface TableChartProps {
  storageId: number,
  pileNumber: number
};

const data = [
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
  { load_timestamp: 1716531994, offload_timestamp: 1763976394 },
]

export const TableChart = () => {
  // const { data, isFetching } = useQuery({ queryKey: ['storages', storageId, 'piles', pileNumber, 'transportation'], queryFn: async () => getTransportation(storageId, pileNumber) });

  // if (isFetching) return <Loading />

  return (
    <Card className={classes.card}>
      <h2 className={classes.header}>Даты перемещений</h2>
      <Table.Root variant='surface' className={classes.table}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Дата загрузки</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Дата выгрузки</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            data.map((item, id) => {
              const startDate = new Date(item.load_timestamp * 1000);
              const endDate = new Date(item.offload_timestamp * 1000);
              const start = `${startDate.getUTCDate().toString().padStart(2, '0')}.${(startDate.getUTCMonth() + 1).toString().padStart(2, '0')}.${startDate.getUTCFullYear()}`;
              const end = `${endDate.getUTCDate().toString().padStart(2, '0')}.${(endDate.getUTCMonth() + 1).toString().padStart(2, '0')}.${endDate.getUTCFullYear()}`;

              return (
                <Table.Row key={id}>
                  <Table.Cell>{start}</Table.Cell>
                  <Table.Cell>{end}</Table.Cell>
                </Table.Row>
              );
            })
          }
          <Table.Row>

          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default TableChart;
