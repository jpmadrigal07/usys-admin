type T_Variant = 'primary' | 'secondary';

type T_LinearProgress = {
  variant?: T_Variant
}

function LinearProgress({ variant = 'primary' }: T_LinearProgress) {
  return (
    <div className={`linear-activity ${variant === 'primary' ? 'bg-info' : 'bg-gray'}`}>
        <div className={`indeterminate ${variant === 'primary' ? 'before:bg-primary after:bg-secondary' : 'before:bg-dark-gray after:bg-light-gray'} `}></div>
    </div>
  );
}

export default LinearProgress;
