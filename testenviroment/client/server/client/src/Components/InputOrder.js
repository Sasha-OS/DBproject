import React, {Fragment, useState} from "react";

const InputOrder = () => {
    const [orderdate, setOrderdate] = useState("");
    const [totalamount, setTotalamount] = useState("");
    const [customerid, setCustomerid] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { orderdate, totalamount, customerid };
          const response = await fetch("http://localhost:5000/Orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          window.location = "http://localhost:3000/order";
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
        <h1 className="text-center mt-5">Order</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
        <input type="text" className="formControl" value={orderdate} onChange={e => setOrderdate(e.target.value)}></input>
        <input type="text" className="formControl" value={totalamount} onChange={e => setTotalamount(e.target.value)}></input>
        <input type="text" className="formControl" value={customerid} onChange={e => setCustomerid(e.target.value)}></input>
        <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
    )
}


export default InputOrder;