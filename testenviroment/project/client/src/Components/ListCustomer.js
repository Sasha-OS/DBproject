import React, {Fragment, useEffect, useState} from "react";

import EditCustomer from './EditCustomer';
const ListCustomers = () => {
    const [customers, setCustomers] = useState([]);
    //detele customer function

    const deleteCustomer = async id => {
        try {
          const deleteCustomer = await fetch(`http://localhost:5000/Customers/${id}`, {
            method: "DELETE"
          });
    
          setCustomers(customers.filter(customer => customer.customerid !== id));
        } catch (err) {
          console.error(err.message);
        }
      };
    const getCustomers = async () => {      
        try {
          const response = await fetch("http://localhost:5000/Customers");
          const jsonData = await response.json();
    
          setCustomers(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    useEffect(()=> {
        getCustomers();
    }, []);
    return (
    <Fragment>
        {" "}
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Customertid</th>
        <th>CustomerName</th>
        <th>CustomerSurname</th>
        <th>Phone</th>
        <th>Address</th>
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
      {customers.map(customer => (
          <tr key={customer.customerid}>
              <td>{customer.customerid}</td>
              <td>{customer.customername}</td>
              <td>{customer.customersurname}</td>
              <td>{customer.customerphone}</td>
              <td>{customer.customeraddress}</td>
              <td>
                  <EditCustomer customer = {customer}></EditCustomer>
              </td>
              <td><button class="btn btn-danger" onClick={() => deleteCustomer(customer.customerid)}>Delete</button></td>
          </tr>
      ))}
      
    </tbody>
  </table>
    </Fragment>)
}

export default ListCustomers;