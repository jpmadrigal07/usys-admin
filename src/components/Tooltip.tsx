import React, { useRef, useState } from 'react';
import TooltipPortal from './TooltipPortal';

type T_Tooltop = {
  children?: any;
  title?: string;
  text?: string;
  placement?: any;
  space?: number;
  disabled?: boolean;
  delay?: number;
};

const positionN = (p: any) => ({
  current: p,
  negate() {
    if (this.current === 'left') return 'right';
    if (this.current === 'right') return 'left';
    if (this.current === 'top') return 'bottom';
    if (this.current === 'bottom') return 'top';
  },
  isHorizontal() {
    return this.current === 'left' || this.current === 'right';
  },
  isVertical() {
    return this.current === 'top' || this.current === 'bottom';
  },
});

const point = () => ({
  x: 0,
  y: 0,
  reset(p: any) {
    this.x = p.x;
    this.y = p.y;
  },
  restrictRect(rect:any){
    if(this.x < rect.left) this.x = rect.left
    else if(this.x > rect.right) this.x = rect.right
    if(this.y < rect.top) this.y = rect.top
    if(this.y > rect.bottom) this.y = rect.bottom
  }
});

const getPoint = (element: any, tooltip: any, placement: any, space: any) => {
  let recursiveCount = 0;
  const pt = point();
  const bounderies = {
    left: space,
    top: space,
    right: document.body.clientWidth - (tooltip.clientWidth + space),
    bottom: window.innerHeight - (tooltip.clientHeight - space),
  };
  const elementRect = element.getBoundingClientRect();

  return (function recursive(placement) {
    recursiveCount++;
    const pos = positionN(placement);

    switch (pos.current) {
      case 'left':
        pt.x = elementRect.left - (tooltip.offsetWidth + space);
        pt.y = elementRect.top + (element.offsetHeight - tooltip.offsetHeight) / 2;
        break;
      case 'right':
        pt.x = elementRect.right + space;
        pt.y = elementRect.top + (element.offsetHeight - tooltip.offsetHeight) / 2;
        break;
      case 'top':
        pt.x = elementRect.left + (element.offsetWidth - tooltip.offsetWidth) / 2;
        pt.y = elementRect.top - (tooltip.offsetWidth - space);
        break;
      default:
        pt.x = elementRect.left + (element.offsetWidth - tooltip.offsetWidth) / 2;
        pt.y = elementRect.bottom + space;
        break;
    }

    if (recursiveCount < 3)
      if (
        (pos.isHorizontal() && (pt.x < bounderies.left || pt.x > bounderies.right)) ||
        (pos.isVertical() && (pt.y < bounderies.top || pt.y > bounderies.bottom))
      ) {
        pt.reset(recursive(pos.negate()));
      }

      pt.restrictRect(bounderies)

    return pt;
  })(placement);
};

const Tooltip = ({ text, children, placement = 'bottom', space = 15, disabled = false, delay, ...props }: T_Tooltop) => {
  const [show, setShow] = useState(0);
  const posRef = useRef({ x: 0, y: 0 });
  const toolTipRef = useRef(null);

  const handleMouseOver = (e: Event) => {
    setShow(1);
    posRef.current = getPoint(e.currentTarget, toolTipRef.current, placement, space);
  };
  const handleMouseOut = () => {
    setShow(0);
  };

  const customStyling = {
    top: posRef.current.y,
    left: posRef.current.x,
    transitionProperty: 'transform opacity',
    transitionDuration: '0.06s',
    transitionTimeFunction: 'cubic-bezier(0,0,0.2,1)',
    transitionDelay: `${show ? delay : '0.02'}s`,
    transformOrigin: `${positionN(placement).negate()}`,
    transform: `scale(${show?1:0.7})`
  }

  return (
    <>
      {disabled ? children : React.cloneElement(children, {
        onMouseOver: handleMouseOver,
        onMouseOut: handleMouseOut,
      })}
      {disabled || <TooltipPortal>
        <span
          ref={toolTipRef}
          className={`fixed text-xs bg-dark text-light p-2 rounded-sm z-50 inline-block whitespace-nowrap ${show === 0 ? 'opacity-0' : 'opacity-100'}`}
          style={customStyling}>
          {text}
        </span>
      </TooltipPortal>}
    </>
  );
};

export default Tooltip;
