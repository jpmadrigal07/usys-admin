const Badge = ({ children, content, offset=0 }: any) => {
  const customStyle ={
    left: `${offset}px`,
    top: `-${typeof(content) === typeof(undefined) ? 4:8}px`
  }

  return (
    <div className='relative inline-block'>
      {children}
      <span
        className={`absolute z-10 -top-2 bg-danger text-light rounded-full text-xs ${typeof content === typeof 1 ? 'w-5' : 'w-auto'} ${
          typeof content === typeof undefined ? 'h-0' : 'h-5'
        }  p-1 pt-1/2 flex justify-center items-center`} style={customStyle}>
        {content}
      </span>
    </div>
  );
};

export default Badge;
