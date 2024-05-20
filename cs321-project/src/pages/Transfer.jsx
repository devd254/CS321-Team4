import React from 'react'

import TransferLoader from '../components/TransferLoader'
import TransferMenu from '../components/TransferMenu'

const Transfer = () => {
  return (
    <div>
      <div className="loader-position">
        <TransferLoader />
      </div>
      <TransferMenu />
    </div>
  )
}

export default Transfer