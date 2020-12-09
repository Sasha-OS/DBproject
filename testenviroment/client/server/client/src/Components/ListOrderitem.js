import React, {Fragment, useEffect, useState} from "react";

import EditOrderitem from './EditOrderitem';
const ListOrderItems = () => {
    const [orderitems, setOrderitems] = useState([]);
    //detele author function

    const deleteOrderitem = async id => {
        try {
          const deleteOrderitem = await fetch(`http://localhost:5000/Orderitems/${id}`, {
            method: "DELETE"
          });
    
          setOrderitems(orderitems.filter(orderitem => orderitem.orderitemid !== id));
        } catch (err) {
          console.error(err.message);
        }
      };
    const getOrderitems = async () => {      
        try {
          const response = await fetch("http://localhost:5000/Orderitems");
          const jsonData = await response.json();
    
          setOrderitems(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    useEffect(()=> {
        getOrderitems();
    }, []);
    return (
    <Fragment>
        {" "}
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>OrderItemId</th>
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
      {orderitems.map(orderitem => (
          <tr key={orderitem.orderitemid}>
              <td>{orderitem.orderitemid}</td>
              <td>{orderitem.orderid}</td>
              <td>{orderitem.bookid}</td>
              <td>{orderitem.unitprice}</td>
              <td>{orderitem.quantity}</td>

              <td>
                  <EditOrderitem orderitem = {orderitem}></EditOrderitem>
              </td>
              <td><button class="btn btn-danger" onClick={() => deleteOrderitem(orderitem.orderitemid)}>Delete</button></td>
          </tr>
      ))}
      
    </tbody>
  </table>
    </Fragment>)
}

export default ListOrderItems;