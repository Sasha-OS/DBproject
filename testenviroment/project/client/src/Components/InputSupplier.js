import React, {Fragment, useState} from "react";

const InputSupplier = () => {
    const [phone, setPhone] = useState("");
    const [taxnumber, setTaxnumber] = useState("");
    const [primarybankaccount, setPrimarybankaccount] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { phone, taxnumber, primarybankaccount };
          const response = await fetch("http://localhost:5000/Suppliers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          window.location = "http://localhost:3000/supplier";
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
        <h1 className="text-center mt-5">Supplier</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
        <input type="text" className="formControl" value={phone} onChange={e => setPhone(e.target.value)}></input>
        <input type="text" className="formControl" value={taxnumber} onChange={e => setTaxnumber(e.target.value)}></input>
        <input type="text" className="formControl" value={primarybankaccount} onChange={e => setPrimarybankaccount(e.target.value)}></input>
        <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
    )
}


export default InputSupplier;