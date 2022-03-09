import { Icon } from '@iconify/react';
import Button from './Button';

const fontfamily = 'font-roboto';

function Card({ children, bottomTitle, bottomValue, imageURL, textImage, textBalance }: any) {
  return (
    <div className='max-w-full drop-shadow-md  mx-3 bg-light rounded-sm divide-y divide-solid divide-light-gray sm:mx-5 md:mx-10 lg:mx-10 2xl:mx-auto'>
      <div className='sm:flex p-2  '>
        <div className='flex-col lg:w-1/2 flex sm:flex-row'>
          <div className='grid place-content-start sm:place-content-center max-h-fit w-[9rem] sm:w-[22rem] p-2 mr-5 '>
            <img src={imageURL} className='rounded-[50%] border-none sm:w-15 md:w-32 lg:w-48 ' alt='Profile Picture' />
          </div>
          <div className='p-2 sm:p-4 sm:mt-4 flex justify-between'>
            <div className={`${fontfamily} w-fit font-normal text-dark mb-4 `}>{textImage}</div>
            {children}
          </div>
        </div>
        <div className='lg:w-1/2 flex flex-row-reverse m-5'>
          <div className='my-10 mr-10 text-dark'>{textBalance}</div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        <div className='md:flex col-start-1 col-end-3 p-3'>
          <p className={`${fontfamily} w-fit text-sm font-normal text-ash-gray sm:mr-auto sm:mt-1 md:mr-56 lg:mr-56  `}>{bottomTitle}</p>
          <p className={`${fontfamily} w-fit text-sm font-medium sm:mt-1 `}>{bottomValue}</p>
        </div>
        <div className='p-3 col-end-7 col-span-2'>
          {/* <a href="" className={`${fontfamily} text-primary text-sm font-normal sm:mt-2`}>Edit name</a> */}
          <Button>
            <Icon icon={`akar-icons:plus`} className='inline' /> New Payment
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
