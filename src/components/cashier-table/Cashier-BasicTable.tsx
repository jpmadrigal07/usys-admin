import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './Cashier-Columns';
import Button from '../Button';

export const CashierBasicTable = () => {
  const data = useMemo(() => MOCK_DATA, []);

  const tableHooks = (hooks: any) => {
    hooks.visibleColumns.push((columns: any) => [
      ...columns,
      {
        id: 'Action',
        Header: 'Action',
        Cell: ({ row }: any) => (
          <div className='grid grid-flow-col w-10 gap-x-3'>
            <Button variant='ghost' className='rounded'>
              Activate
            </Button>
            <Button className='rounded'>Edit</Button>
            <Button variant='danger' className='rounded'>
              Delete
            </Button>
          </div>
        ),
      },
    ]);
  };

  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data,
    },
    tableHooks
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div>
      <div className="flex justify-between">
        <div className='text-xl font-bold text-dark'>Semester</div>
      </div>
    <div className='rounded bg-light drop-shadow-md py-2'>
      <table
      className='divide-y divide-gray w-full text-center'
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className='py-2' {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className='divide-y divide-gray' {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr  {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (  
                  <td
                    className={`${
                      cell.column.id === 'Active' &&
                      cell.value === 'true' &&
                      'text-success'
                    } ${
                      cell.column.id === 'Active' &&
                      cell.value === 'false' &&
                      'text-danger'
                    } py-2`}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
    </div>
  );
};
