import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdSend } from "react-icons/io";
import { FaPrint } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import './index.css'

const OrderTable = props => {
  const {InventoryList} = props
  return (
    <div className='table-card'>
      <div className='btn-card'>
      <div>
      <button type="button" className='import-btn'><LiaFileImportSolid/> Import Order</button>
      <button type="button" className='import-btn' disabled="true"><IoMdSend/> Accept</button>
      <button type="button" className='import-btn' disabled="true"><FaPrint/> Print</button>
      </div>
      <button type='button' className='import-btn-1'><IoIosRefresh />Refresh</button>
      </div>
    <table>
        <tr>
          <th><button><FaPlus /></button></th>
          <th><input type="checkbox" /></th>
          <th>Channel</th>
          <th>Order No</th>
          <th>Order Date</th>
          <th>City</th>
          <th>Customer Name</th>
          <th>Order Value</th>
          <th>Status</th>
          <th>Operations</th>
        </tr>
          
            {InventoryList.map(each => (
              <tr className='tr-card'>
              <td><button><FaPlus /></button></td>
              <td><input type="checkbox" /></td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRAqkpb7rtNgMx2cKH2aw5oejpAvzBPhu5jdR7riHjFBejJBT3lKKsbZeHB87L9rHMJEc&usqp=CAU" alt="shopify" /></td>
                <td>{each.orderNo}</td>
                <td>{each.orderDate}</td>
                <td>{each.city}</td>
                <td>{each.customerName}</td>
                <td>{each.orderValue}</td>
                <td><button type='button' className='status-btn'>{each.status}</button></td>
                <td>
                  <select>
                    <option value="Action">Action</option>
                  </select>
                </td>
                </tr>
            ))}
          
    </table>
          <div className='page-sel'>
            <FaChevronLeft className='left' />
            <p className='count'>1</p>
            <FaAngleRight className='right' />
            <select>
              <option className='sel'>20 / Page</option>
            </select>
          </div>
    </div>
  )
}

export default OrderTable;
