import React from 'react';

type T_CardMenu = {
  title: string;
  img: string;
}

const CardMenu = ({title, img}: T_CardMenu) => {
  return (
    <div className='w-fit h-fit drop-shadow-md rounded-sm bg-light p-2 cursor-pointer'>
      <div className='bg-lighter-gray transition-colors rounded-sm hover:bg-gray'>
        <img src={img} alt='logo' className='w-32 h-32 transition-transform hover:scale-110' />
      </div>
      <p className='pt-3 pb-1 text-sm'>{title}</p>
    </div>
  );
};

export default CardMenu;
