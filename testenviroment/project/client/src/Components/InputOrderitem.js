import React, {Fragment, useState} from "react";

const InputOrderitem = () => {
    const [orderid, setOrderid] = useState("");
    const [bookid, setBookid] = useState("");
    const [unitprice, setUnitprice] = useState("");
    const [quantity, setQuantity] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { orderid, bookid, unitprice, quantity };
          const response = await fetch("http://localhost:5000/Orderitems", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          window.location = "http://localhost:3000/orderitem";
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
        <h1 className="text-center mt-5">OrderItem</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
        <input type="text" className="formControl" value={orderid} onChange={e => setOrderid(e.target.value)}></input>
        <input type="text" className="formControl" value={bookid} onChange={e => setBookid(e.target.value)}></input>
        <input type="text" className="formControl" value={unitprice} onChange={e => setUnitprice(e.target.value)}></input>
        <input type="text" className="formControl" value={quantity} onChange={e => setQuantity(e.target.value)}></input>

        <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
    )
}


export default InputOrderitem;