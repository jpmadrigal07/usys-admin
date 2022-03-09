import React from 'react';
import { useTable } from 'react-table';

const COLUMNS: any = [
  { Header: 'Date', accessor: 'date' },
  { Header: 'Description', accessor: 'description' },
  { Header: 'Amount', accessor: 'amount' },
  { Header: 'Cashier Name', accessor: 'cashier_name' },
];

const data = [
  {
    id: 1,
    date: '11/17/2020',
    description: 'Dip - Tapenade',
    amount: '$7.86',
    cashier_name: 'Farlee Romer',
  },
  {
    id: 2,
    date: '3/24/2021',
    description: 'Wine - Soave Folonari',
    amount: '$8.71',
    cashier_name: 'Janos Bengough',
  },
  {
    id: 3,
    date: '5/16/2021',
    description: 'Juice - Grapefruit, 341 Ml',
    amount: '$6.90',
    cashier_name: 'Anthia Korlat',
  },
  {
    id: 4,
    date: '11/18/2020',
    description: 'Juice - Ocean Spray Kiwi',
    amount: '$1.38',
    cashier_name: 'Stavro Ambroise',
  },
  {
    id: 5,
    date: '5/17/2021',
    description: 'Island Oasis - Raspberry',
    amount: '$6.35',
    cashier_name: "Martynne O'Reilly",
  },
  {
    id: 6,
    date: '8/16/2021',
    description: 'Bread - Olive',
    amount: '$3.70',
    cashier_name: 'Henrie Duke',
  },
];

const TableStudent = () => {
  const tableInstance = useTable({ columns: COLUMNS, data: data });
  const {
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  }: any = tableInstance;

  return (
    <>
      <div className="flex justify-between">
        <div className='text-xl font-bold text-dark'>Last 5 payments</div>
      </div>
      <div className='max-w-full drop-shadow-md bg-light rounded-sm divide-y divide-solid divide-light-gray sm:mx-5 md:mx-10 lg:mx-10 2xl:mx-auto'>
        <table className='w-full divide-y divide-solid divide-light-gray'>
          <thead className='ml-5'>
            {headerGroups.map((h: any) => (
              <tr className='text-left' {...h.getHeaderGroupProps()}>
                {h.headers.map((c: any) => (
                  <th className='py-3 font-normal' {...c.getHeaderProps()}>
                    {c.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className='divide-y divide-solid divide-light-gray'>
            {rows.map((r: any) => {
              prepareRow(r);
              return (
                <tr {...r.getRowProps()}>
                  {r.cells.map((c: any) => (
                    <td className={`my-1 px-2 py-3 font-medium`} {...c.getCellProps()}>
                      {c.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableStudent;
