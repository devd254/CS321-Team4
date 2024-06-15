import React, { useRef, forwardRef, useImperativeHandle } from 'react'

import warehouse from '../assets/warehouse.png'
import truck from '../assets/truck.png'

const TransferLoader = forwardRef((props, ref) => {
  const truckRef = useRef();

  useImperativeHandle(ref, () => ({
    startAnimation: () => {
      console.log("Starting animation");
      truckRef.current.style.transition = 'transform 6s';
      truckRef.current.style.transform = 'translateX(10rem)';
    }
  }));

  return (
    <div className="loader-container">
        <img className="loader-warehouse-left" src={warehouse} alt="warehouse image" />
        <img ref={truckRef} className="loader-truck" src={truck} alt="truck image" />
        <img className="loader-warehouse-right" src={warehouse} alt="warehouse image" />
    </div>
  );
});

export default TransferLoader;