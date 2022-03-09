type T_Variant = 'text' | 'number' | 'checkbox' | 'password' | 'email';

type T_Input = {
  placeholder?: string;
  variant?: T_Variant;
  className?: string;
  defaultValue?: any;
  onChange?: any;
  size?: string;
  ref?: any;
  disabled?: boolean;
};

const selectSize = (size: string) => {
  switch (size) {
    case 'sm':
      return 'p-0 text-xs w-20';
    case 'lg':
      return 'px-7 py-3 text-md';
    default:
      return 'p-1 text-sm w-60';
  }
};

const Input = ({ variant = 'text', placeholder, className, defaultValue, size = 'md', onChange, ref, disabled }: T_Input) => {
  const inputSize = selectSize(size);

  return (
    <input
      ref={ref}
      onChange={onChange}
      defaultValue={defaultValue}
      type={variant}
      placeholder={placeholder}
      disabled = {disabled}
      className={`pl-[7px] pr-[7px] pt-[5px] pb-[5px] ${
        (variant !== 'checkbox') &&
        `${inputSize} mr-1 outline-none focus:ring-1 focus:ring-inset focus:border-primary focus:ring-primary rounded-sm border border-dark font-normal text-dark`
      }
      ${variant === 'checkbox' && `w-5 h-5`} ${className}`}
    />
  );
};

export default Input;
