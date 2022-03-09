type T_Variant = 'primary' | 'success' | 'warning' | 'error';

type T_Message = {
  variant?: T_Variant;
  title: string;
  text?: string;
  icon: object;
};

const selectBg = (variant: T_Variant) => {
  switch (variant) {
    case 'success':
      return 'bg-success-light';
    case 'warning':
      return 'bg-warning-light';
    case 'error':
      return 'bg-danger-light';
    default:
      return 'bg-primary-light';
  }
};

const Message = ({ variant = 'primary', title, text, icon }: T_Message) => {
  const bgColor = selectBg(variant);

  return (
    <div className={`p-4 m-1 ${bgColor} font-segoe`}>
      <div className='flex'>
        <div className='mt-1'>{icon}</div>
        <div className='pl-2'>
          <p className={`${text !== undefined ? 'text-md' : 'text-dark text-sm'} font-semibold`}>{title}</p>
          {text !== undefined && <p className='text-sm text-dark inline-block'>{text}</p>}
        </div>
      </div>
    </div>
  );
};

export default Message;
