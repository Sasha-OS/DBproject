import React, {Fragment, useState} from "react";

const InputCustomer = () => {
    const [customername, setCustomername] = useState("");
    const [customersurname, setCustomersurname] = useState("");
    const [ customerphone, setCustomerphone] = useState("");
    const [customeraddress, setCustomeraddress] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { customername, customersurname, customerphone, customeraddress };
          const response = await fetch("http://localhost:5000/Customers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          window.location = "http://localhost:3000/customer";
        } catch (err) {
          console.error(err.message);
        }
      };
        
    return (
    <Fragment>
       <button class="btn btn-primary" onClick={() => (window.location = "http://localhost:3000/author")}>Author</button>
         <button class="btn btn-primary" onClick={() => (window.location = "http://localhost:3000/customer")}>Customer</button>
         <button class="btn btn-primary" onClick={() => (window.location = "http://localhost:3000/order")}>Order</button>
         <button class="btn btn-primary" onClick={() => (window.location = "http://localhost:3000/supplier")}>Supplier</button>
         <button class="btn btn-primary" onClick={() => (window.location = "http://localhost:3000/books")}>Books</button>
         <button class="btn btn-primary" onClick={() => (window.location = "http://localhost:3000/orderitem")}>OrderItem</button>
        <h1 className="text-center mt-5">Customer</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
        <input type="text" className="formControl" value={customername} onChange={e => setCustomername(e.target.value)}></input>
        <input type="text" className="formControl" value={customersurname} onChange={e => setCustomersurname(e.target.value)}></input>
        <input type="text" className="formControl" value={customerphone} onChange={e => setCustomerphone(e.target.value)}></input>
        <input type="text" className="formControl" value={customeraddress} onChange={e => setCustomeraddress(e.target.value)}></input>
        <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
    )
}


export default InputCustomer;