import Button from './Button';
import Input from './Input';
import Select from './Select';
import MOCK_DATA from './data/MOCK_DATA.json';
import { COLUMNS } from './data/columns';
import { useMemo } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import { Icon } from '@iconify/react';
import TableClickMenu from './TableClickMenu';
import TableCheckbox from './TableCheckbox';

const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableHooks = (hooks: any) => {
    hooks.visibleColumns.push((columns: any) => [
      {
        id: 'Check',
        Header: ({ getToggleAllRowsSelectedProps }: any) => <TableCheckbox {...getToggleAllRowsSelectedProps()} />,
        Cell: ({ row }: any) => <TableCheckbox {...row.getToggleRowSelectedProps()} />,
      },
      ...columns,
      {
        id: 'Edit',
        Header: '',
        Cell: ({ row, refs }: any) => <TableClickMenu refs={refs}/>,
      },
    ]);
  };

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useSortBy,
    usePagination,
    useRowSelect,
    tableHooks,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    state,
    pageCount,
    page,
    nextPage,
    previousPage,
    // selectedFlatRows: used for checking rows that is selected
    // selectedFlatRows,
    canNextPage,
    canPreviousPage,
    prepareRow,
    gotoPage,
  }: any = tableInstance;
  const { pageIndex, pageSize }: any = state;

  return (
    <div className='my-5 text-sm'>
      <div className='flex justify-between'>
        <div className='flex'>
          <p>
            Showing 1 to {pageSize} of {pageCount} records.
          </p>
          <Input variant='checkbox' size='sm' className='ml-4' />
          <p className='ml-2'>Show hidden types</p>
        </div>
        <div>
          <Select className='mr-3'/>
          <Select/>
        </div>
      </div>

      <div className='my-5 text-dark text-sm'>
        <table className='w-full divide-y divide-solid divide-gray ' {...getTableProps()}>
          <thead>
            {headerGroups.map((h: any) => (
              <tr className='text-left' {...h.getHeaderGroupProps()}>
                {h.headers.map((c: any) => (
                  <th className={`pb-2 px-2`} {...c.getHeaderProps(c.getSortByToggleProps())}>
                    {c.render('Header')}
                    {c.isSorted ? (
                      c.isSortedDesc ? (
                        <Icon icon='akar-icons:arrow-down' className='ml-1 inline' />
                      ) : (
                        <Icon icon='akar-icons:arrow-up' className='ml-1 inline' />
                      )
                    ) : (
                      c.id !== 'Edit' && c.id !== 'Check' && <Icon icon='akar-icons:arrow-up-down' className='ml-1 inline' />
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className='divide-y divide-solid divide-gray'>
            {page.map((r: any) => {
              prepareRow(r);
              return (
                <tr className='hover:bg-gray' {...r.getRowProps()}>
                  {r.cells.map((c: any) => (
                    <td className={`${c.column.id === 'Edit' && 'flex flex-row-reverse'} my-1 px-2`} {...c.getCellProps()}>
                      {c.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className='flex'>
        <Button size='sm' onClick={previousPage} disable={!canPreviousPage}>
          &#60; Previous
        </Button>
        <p className='ml-3 mr-2'>Page</p>
        <Input
          size='sm'
          variant='number'
          defaultValue={pageIndex + 1}
          onChange={(e: any) => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(pageNumber);
          }}
        />
        <p className='ml-1 mr-3'>
          {pageIndex + 1} of {pageCount}
        </p>
        <Button size='sm' onClick={nextPage} disable={!canNextPage}>
          Next &#62;
        </Button>
      </div>
    </div>
  );
};

export default Table;
