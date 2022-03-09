import React from 'react';
import LinearProgress from './LinearProgress';

const Loading = () => {
  return (
    <div className='w-screen h-screen grid place-content-center'>
      <div className='w-[200px] h-[200px] flex items-center'>
        <LinearProgress />
      </div>
    </div>
  );
};

export default Loading;
