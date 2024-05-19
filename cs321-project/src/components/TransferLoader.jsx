import React from 'react'

import warehouse from '../assets/warehouse.png'
import truck from '../assets/truck.png'

const TransferLoader = () => {
  return (
    <div>
        <div>Bar</div>
        <img src={warehouse} alt="warehouse image" />
        <img src={truck} alt="truck image" />
        <img src={warehouse} alt="warehouse image" />
    </div>
  )
}

export default TransferLoader