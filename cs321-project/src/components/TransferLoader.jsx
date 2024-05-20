import React from 'react'

import warehouse from '../assets/warehouse.png'
import truck from '../assets/truck.png'

const TransferLoader = () => {
  return (
    <div className="loader-container">
        <div>Bar</div>
        <img className="loader-warehouse-left" src={warehouse} alt="warehouse image" />
        <img className="loader-truck" src={truck} alt="truck image" />
        <img className="loader-warehouse-right" src={warehouse} alt="warehouse image" />
    </div>
  )
}

export default TransferLoader