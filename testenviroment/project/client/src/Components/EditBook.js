import React, {Fragment, useState} from "react";

const EDditBook = ({book}) => {
    const [supplierid, setSupplierid] = useState(book.supplierid);
    const [authorid, setAuthorid] = useState(book.authorid);
    const [unitprice, setUnitprice] = useState(book.unitprice);
    const [isbn, setIsbn] = useState(book.isbn);
    const [circulation, setCirculation] = useState(book.circulation);
    const [yearofpublication, setYearofpublication] = useState(book.yearofpublication);
    //create edit function to edit data in modal

    const updateBook = async e => {
        e.preventDefault();
        try {
          const body = { supplierid, authorid, unitprice, isbn, circulation, yearofpublication  };
          const response = await fetch(
            `http://localhost:5000/Books/${book.bookid}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );
    
          window.location = "http://localhost:3000/books";
        } catch (err) {
          console.error(err.message);
        }
      };

    return (
        <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${book.bookid}`}>
          Edit
        </button>
        
       
        <div class="modal" id={`id${book.bookid}`} >
          <div class="modal-dialog">
            <div class="modal-content">
        
           
              <div class="modal-header">
                <h4 class="modal-title">Edit Book</h4>
                <button type="button" class="close" data-dismiss="modal" onClick={()=> {
                    setSupplierid(book.supplierid);
                    setAuthorid(book.authorid);
                    setUnitprice(book.unitprice);
                    setIsbn(book.isbn);
                    setCirculation(book.circulation);
                    setYearofpublication(book.yearofpublication);
                }}>&times;</button>
              </div>
        
  
              <div class="modal-body">
                <input type="text" className="formControl" value={supplierid} onChange={e => setSupplierid(e.target.value)}></input>
                <input type="text" className="formControl" value={authorid} onChange={e => setAuthorid(e.target.value)}></input>
                <input type="text" className="formControl" value={unitprice} onChange={e => setUnitprice(e.target.value)}></input>
                <input type="text" className="formControl" value={isbn} onChange={e => setIsbn(e.target.value)}></input>
                <input type="text" className="formControl" value={circulation} onChange={e => setCirculation(e.target.value)}></input>
                <input type="text" className="formControl" value={yearofpublication} onChange={e => setYearofpublication(e.target.value)}></input>
              </div>
        
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={e => updateBook(e)}>Edit</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
        
            </div>
          </div>
        </div></Fragment>
    )
}

export default EDditBook;