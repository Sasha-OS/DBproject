import React, {Fragment, useEffect, useState} from "react";

import EditOrder from './EditOrder';
const ListOrders = () => {
    const [orders, setOrders] = useState([]);
    //detele author function

    const deleteOrder = async id => {
        try {
          const deleteOrder = await fetch(`http://localhost:5000/Orders/${id}`, {
            method: "DELETE"
          });
    
          setOrders(orders.filter(order => order.orderid !== id));
        } catch (err) {
          console.error(err.message);
        }
      };
    const getOrder = async () => {      
        try {
          const response = await fetch("http://localhost:5000/Orders");
          const jsonData = await response.json();
    
          setOrders(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    useEffect(()=> {
        getOrder();
    }, []);
    return (
    <Fragment>
        {" "}
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>OrderId</th>
        <th>OrderDate</th>
        <th>TotalAmount</th>
        <th>CustomerId</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}  
      {orders.map(order => (
          <tr key={order.orderid}>
              <td>{order.orderid}</td>
              <td>{order.orderdate}</td>
              <td>{order.totalamount}</td>
              <td>{order.customerid}</td>

              <td>
                  <EditOrder order = {order}></EditOrder>
              </td>
              <td><button class="btn btn-danger" onClick={() => deleteOrder(order.orderid)}>Delete</button></td>
          </tr>
      ))}
      
    </tbody>
  </table>
    </Fragment>)
}

export default ListOrders;