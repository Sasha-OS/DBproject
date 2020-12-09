import React, {Fragment, useState} from "react";

const InputBook = () => {
    const [supplierid, setSupplierid] = useState("");
    const [authorid, setAuthorid] = useState("");
    const [unitprice, setUnitprice] = useState("");
    const [isbn, setIsbn] = useState("");
    const [circulation, setCirculation] = useState("");
    const [yearofpublication, setYearofpublication] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { supplierid, authorid, unitprice, isbn, circulation, yearofpublication };
          const response = await fetch("http://localhost:5000/Books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
    
          window.location = "http://localhost:3000/books";
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
        <h1 className="text-center mt-5">Books</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
        <input type="text" className="formControl" value={supplierid} onChange={e => setSupplierid(e.target.value)}></input>
        <input type="text" className="formControl" value={authorid} onChange={e => setAuthorid(e.target.value)}></input>
        <input type="text" className="formControl" value={unitprice} onChange={e => setUnitprice(e.target.value)}></input>
        <input type="text" className="formControl" value={isbn} onChange={e => setIsbn(e.target.value)}></input>
        <input type="text" className="formControl" value={circulation} onChange={e => setCirculation(e.target.value)}></input>
        <input type="text" className="formControl" value={yearofpublication} onChange={e => setYearofpublication(e.target.value)}></input>
        <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
    )
}


export default InputBook;