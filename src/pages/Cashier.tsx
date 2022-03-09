import Input from '../components/Input';
import { Icon } from '@iconify/react';

const Cashier = () => {
  return (
    <div className="flex justify-center text-center h-screen">
      <div className='mt-[10vh]'>
        <div className=" h-48 w-48 bg-usys-logo bg-no-repeat bg-cover mx-auto"></div>
        <div className='flex flex-col-reverse items-center'>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon icon="radix-icons:magnifying-glass" color="#0078d4" fontSize={25} inline={true} />
            </span>
            <Input size='md' className='h-10 block bg-white pl-12 focus:shadow-md  md:w-96 sm:text-sm sm:w-[90vw]' />
          </label>
          <h1 className=' mt-0.5 mb-7 font-old-english-text text-3xl text-center font-normal'>University System</h1>
        </div>
      </div>
    </div>
  );
}
export default Cashier;
