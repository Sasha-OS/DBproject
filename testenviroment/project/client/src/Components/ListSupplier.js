import React, {Fragment, useEffect, useState} from "react";

import EditSupplier from './EditSupplier';
const ListSuppliers = () => {
    const [suppliers, setSuppliers] = useState([]);
    //detele author function

    const deleteSupplier = async id => {
        try {
          const deleteSupplier = await fetch(`http://localhost:5000/Suppliers/${id}`, {
            method: "DELETE"
          });
    
          setSuppliers(suppliers.filter(supplier => supplier.supplierid !== id));
        } catch (err) {
          console.error(err.message);
        }
      };
    const getSupplier = async () => {      
        try {
          const response = await fetch("http://localhost:5000/Suppliers");
          const jsonData = await response.json();
    
          setSuppliers(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    useEffect(()=> {
        getSupplier();
    }, []);
    return (
    <Fragment>
        {" "}
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>SupplierId</th>
        <th>Phone</th>
        <th>TaxNumber</th>
        <th>PrimaryBankAccount</th>
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
      {suppliers.map(supplier => (
          <tr key={supplier.supplierid}>
              <td>{supplier.supplierid}</td>
              <td>{supplier.phone}</td>
              <td>{supplier.taxnumber}</td>
              <td>{supplier.primarybankaccount}</td>

              <td>
                  <EditSupplier supplier = {supplier}></EditSupplier>
              </td>
              <td><button class="btn btn-danger" onClick={() => deleteSupplier(supplier.supplierid)}>Delete</button></td>
          </tr>
      ))}
      
    </tbody>
  </table>
    </Fragment>)
}

export default ListSuppliers;