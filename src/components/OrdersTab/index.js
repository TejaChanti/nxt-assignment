import React from 'react';
import './index.css'
import OrderTable from '../OrderTable';

const OrdersTab = props => {
  const {InventoryList} = props
  return (
    <div className='orders-container'>
      <div className='orders'>
        <span>Orders</span>
        <p>X</p>
      </div>
    <div className='orders-tab-card'>
      <p className='pending'>Pending</p>
      <p>Accepted</p>
      <p>AWB Created</p>
      <p>Ready to Ship</p>
      <p>Shipped</p>
      <p>Completed</p>
      <p>Cancelled</p>
    </div>
      <OrderTable InventoryList={InventoryList} />
    </div>
  )
}

export default OrdersTab;
