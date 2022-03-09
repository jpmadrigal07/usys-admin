import { forwardRef, useEffect, useRef } from 'react';


const TableCheckbox = forwardRef(({ indeterminate, ...rest }:any, ref:any) => {
  const defaultRef = useRef();
  const resolveRef = ref || defaultRef;

  useEffect(() => {
    resolveRef.current.indeterminate = indeterminate;
  }, [resolveRef, indeterminate]);

  return (
    <>
      <input className='w-5 h-5' aria-label='checkbox' type='checkbox' ref={resolveRef} {...rest} />
    </>
  );
});

export default TableCheckbox;
