import React, { useRef } from 'react'

import TransferLoader from '../components/TransferLoader'
import TransferMenu from '../components/TransferMenu'

const Transfer = () => {
  const loaderRef = useRef();

  const startTruckAnimation = () => {
    try{
      loaderRef.current.startAnimation();
    }
    catch(e){
      console.log("Oh no! Ref for parent animation function failed!");
    }
  };

  return (
    <div>
      <div className="loader-position">
        <TransferLoader ref={loaderRef} />
      </div>
      <div className="menu-position">
        <TransferMenu truckAnimation={startTruckAnimation} />
      </div>
    </div>
  )
}

export default Transfer