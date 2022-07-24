import React from 'react';
import { Table as TableBootstrap } from 'react-bootstrap';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

export interface Props {
  columns: Array<ColumnDef<any>>;
  data: Array<any>;
}

export const Table = (props: Props) => {
  const { columns, data } = props;

  const columnsParsed = columns;

  const table = useReactTable({
    data: data,
    columns: columnsParsed,

    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <TableBootstrap striped hover >
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableBootstrap>
    </>
  );
};
