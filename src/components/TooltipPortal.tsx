import ReactDOM from 'react-dom';

const TooltipPortal = (props: any) => {
  return ReactDOM.createPortal(props.children, document.body);
};

export default TooltipPortal;
