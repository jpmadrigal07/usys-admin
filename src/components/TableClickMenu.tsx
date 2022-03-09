import { Icon } from '@iconify/react';
import React, { useRef, useState } from 'react';

const TableClickMenu = ({refs}:any) => {
  const [showMenu, setShowMenu] = useState(false);
  const menu = useRef(refs);

  return (
    <button
    className='text-left'
      onBlur={() => {
        setShowMenu(false);
      }}>
      <Icon
        cursor='pointer'
        icon='bi:three-dots'
        className='text-2xl relative text-dark hover:text-dark-gray'
        onClick={() => {
          setShowMenu(!showMenu);
          if (menu !== null)
            menu.current.focus();
        }}
      />
      <div
        ref={menu}
        className={`${!showMenu && 'hidden'} absolute w-52 h-auto bg-light z-10 right-10 p-2 shadow-sm shadow-dark-gray rounded-sm cursor-pointer`}>
        <ul>
          <li className='py-1'>
            <Icon icon='bi:pin-angle' className='inline mr-2 text-lg text-primary' />
            Pin to dashboard
          </li>
          <li className='py-1'>
            <Icon icon='line-md:pencil' className='inline mr-2 text-lg text-primary' />
            Edit tags
          </li>
          <li className='py-1'>
            <Icon icon='bytesize:mobile' className='inline mr-2 text-lg text-primary' />
            Open in mobile
          </li>
          <li className='py-1'>
            <Icon icon='ri:delete-bin-6-line' className='inline mr-2 text-lg text-primary' />
            Delete
          </li>
        </ul>
      </div>
    </button>
  );
};

export default TableClickMenu;
