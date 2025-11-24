import { Card, Table } from '@radix-ui/themes';
import classes from './table-chart.module.css';

const data = [
  [new Date(2025, 5, 23), new Date(2025, 5, 24)],
  [new Date(2025, 5, 23), new Date(2025, 5, 24)],
  [new Date(2025, 5, 23), new Date(2025, 5, 24)],
  [new Date(2025, 5, 23), new Date(2025, 5, 24)],
  [new Date(2025, 5, 23), new Date(2025, 5, 24)],
  [new Date(2025, 5, 23), new Date(2025, 5, 24)],
  [new Date(2025, 5, 23), new Date(2025, 5, 24)],
  [new Date(2025, 5, 23), new Date(2025, 5, 24)],
  [new Date(2025, 5, 23), new Date(2025, 5, 24)],
  [new Date(2025, 5, 23), new Date(2025, 5, 24)],
]

export const TableChart = () => {
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
            data.map((row, id) => {
              const start = `${row[0].getUTCDate().toString().padStart(2, '0')}.${(row[0].getUTCMonth() + 1).toString().padStart(2, '0')}.${row[0].getUTCFullYear()}`;
              const end = `${row[1].getUTCDate().toString().padStart(2, '0')}.${(row[1].getUTCMonth() + 1).toString().padStart(2, '0')}.${row[1].getUTCFullYear()}`;

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
