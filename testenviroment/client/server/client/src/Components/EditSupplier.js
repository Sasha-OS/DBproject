import React, {Fragment, useState} from "react";

const EditSupplier = ({supplier}) => {
    const [phone, setPhone] = useState(supplier.phone);
    const [taxnumber, setTaxnumber] = useState(supplier.taxnumber);
    const [primarybankaccount, setPrimarybankaccount] = useState(supplier.primarybankaccount);
    //create edit function to edit data in modal

    const updateSupplier = async e => {
        e.preventDefault();
        try {
          const body = { phone, taxnumber, primarybankaccount };
          const response = await fetch(
            `http://localhost:5000/Suppliers/${supplier.supplierid}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );
    
          window.location = "http://localhost:3000/supplier";
        } catch (err) {
          console.error(err.message);
        }
      };

    return (
        <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${supplier.supplierid}`}>
          Edit
        </button>
        
       
        <div class="modal" id={`id${supplier.supplierid}`} >
          <div class="modal-dialog">
            <div class="modal-content">
        
           
              <div class="modal-header">
                <h4 class="modal-title">Edit Supplier</h4>
                <button type="button" class="close" data-dismiss="modal" onClick={()=> {
                    setPhone(supplier.phone);
                    setTaxnumber(supplier.taxnumber);
                    setPrimarybankaccount(supplier.primarybankaccount);
                }}>&times;</button>
              </div>
        
  
              <div class="modal-body">
                <input type="text" className="formControl" value={phone} onChange={e => setPhone(e.target.value)}></input>
                <input type="text" className="formControl" value={taxnumber} onChange={e => setTaxnumber(e.target.value)}></input>
                <input type="text" className="formControl" value={primarybankaccount} onChange={e => setPrimarybankaccount(e.target.value)}></input>
              </div>
        
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={e => updateSupplier(e)}>Edit</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
        
            </div>
          </div>
        </div></Fragment>
    )
}

export default EditSupplier;