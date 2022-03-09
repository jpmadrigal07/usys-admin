type T_Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'ghost';
type T_Type = 'button' | 'submit' | 'reset';

type T_Button = {
  children: any;
  variant?: T_Variant;
  onClick?: any;
  disable?: boolean;
  size?: string;
  className?: string;
  onMouseOver?: any;
  onMouseOut?: any;
  type? : T_Type;
};

const selectBg = (variant: T_Variant) => {
  switch (variant) {
    case 'secondary':
      return 'bg-secondary';
    case 'success':
      return 'bg-success';
    case 'danger':
      return 'bg-danger';
    case 'warning':
      return 'bg-warning';
    case 'info':
      return 'bg-info';
    case 'light':
      return 'bg-light';
    case 'dark':
      return 'bg-dark';
    case 'link':
      return 'bg-transparent';
    case 'ghost':
      return 'bg-transparent';
    default:
      return 'bg-primary';
  }
};

const selectSize = (size: string) => {
  switch (size) {
    case 'sm':
      return 'text-xs';
    case 'lg':
      return 'text-md';
    default:
      return 'text-sm';
  }
};



function Button({ children, variant = 'primary', onClick, disable = false, size = 'md',onMouseOver, onMouseOut, className, type }: T_Button) {
  const color = selectBg(variant);
  const buttonSize = selectSize(size);
  return (
   
    <button onMouseOver={onMouseOver} onMouseOut={onMouseOut} disabled={disable} onClick={onClick} type = {type}
      className={`px-3 p-[7px] ${color} ${
        color === 'bg-light' || color === 'bg-transparent'
          ? 'text-dark'
          : 'text-light'
      } ${
        (variant === 'ghost' || variant === 'light') && 'ring-1 ring-inset ring-dark-gray'
      } ${(variant === 'ghost' || variant === 'light') && 'hover:bg-light-gray'} ${variant === 'dark' && 'hover:bg-dark-gray'} ${
        variant === 'link' && 'text-primary hover:underline'
      } ${buttonSize} h-fit mx-0 hover:saturate-[.70] rounded-sm disabled:bg-light-gray disabled:text-dark-gray ${className}`}>
      {children}
    </button>
  );
}

export default Button;
