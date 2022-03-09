
type T_Variant = 'primary' | 'secondary' | 'success' | 'danger' |'warning' | 'info' | 'light' | 'dark' | 'link' | 'ghost';

type T_Divider = {
  m?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  variant?: T_Variant;
}

const getColor = (variant: T_Variant) => {
  switch (variant) {
    case 'secondary':
      return 'border-secondary';
    case 'success':
      return 'border-success';
    case 'danger':
      return 'border-danger';
    case 'warning':
      return 'border-warning';
    case 'info':
      return 'border-info';
    case 'light':
      return 'border-light';
    case 'dark':
      return 'border-dark';
    case 'link':
      return 'border-link';
    case 'ghost':
      return 'border-ghost';
    default:
      return 'border-primary'
  }
}

function Divider({ m, mt, mb, ml, mr, variant = 'primary' }: T_Divider) {
  const color = getColor(variant);

  const marginStyle ={
    margin: m,
    marginTop: mt,
    marginBottom: mb,
    marginRight: ml,
    marginLeft: mr,
  };

  return (
    <div className={`border ${color}`} style={ marginStyle }></div>
  );
}

export default Divider;