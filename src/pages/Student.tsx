import React from 'react';
import Card from '../components/CardWithImage';
import TableStudent from '../components/cashier/TableStudent';
import { CashierBasicTable } from '../components/cashier-table/Cashier-BasicTable';

const Student = () => {
  return (
    <div className="container mx-auto">
      <Card
        imageURL={'https://partneruniversity.microsoft.com/content/images/microsoft-img.png'}
        textImage={<div><h1 className='text-3xl font-bold mt-6'>John Patrick Madrigal</h1><p>0119-0648</p></div>}
        bottomTitle={'Education Level'}
        bottomValue={'College'}
        textBalance={<div><h1 className='text-3xl font-bold mt-6'>$ 6,000.00</h1><p>Remaining balance as of today</p></div>}
        >
      </Card>

      <TableStudent/>

      <CashierBasicTable/>
    </div>
  );
};

export default Student;
