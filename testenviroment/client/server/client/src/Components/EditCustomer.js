import React, {Fragment, useState} from "react";

const EditCustomer = ({customer}) => {
    const [customername, setCustomername] = useState(customer.customername);
    const [customersurname, setCustomersurname] = useState(customer.customersurname);
    const [customerphone, setCustomerphone] = useState(customer.customerphone);
    const [customeraddress, setCustomeraddress] = useState(customer.customeraddress);
    //create edit function to edit data in modal

    const updateCustomer = async e => {
        e.preventDefault();
        try {
          const body = { customername, customersurname, customerphone, customeraddress  };
          const response = await fetch(
            `http://localhost:5000/Customers/${customer.customerid}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );
    
          window.location = "http://localhost:3000/customer";
        } catch (err) {
          console.error(err.message);
        }
      };

    return (
        <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${customer.customerid}`}>
          Edit
        </button>
        
       
        <div class="modal" id={`id${customer.customerid}`} >
          <div class="modal-dialog">
            <div class="modal-content">
        
           
              <div class="modal-header">
                <h4 class="modal-title">Edit Customer</h4>
                <button type="button" class="close" data-dismiss="modal" onClick={()=> {
                    setCustomername(customer.customername);
                    setCustomersurname(customer.customersurname);
                    setCustomerphone(customer.customerphone);
                    setCustomeraddress(customer.customeraddress);
                }}>&times;</button>
              </div>
        
  
              <div class="modal-body">
                <input type="text" className="formControl" value={customername} onChange={e => setCustomername(e.target.value)}></input>
                <input type="text" className="formControl" value={customersurname} onChange={e => setCustomersurname(e.target.value)}></input>
                <input type="text" className="formControl" value={customerphone} onChange={e => setCustomerphone(e.target.value)}></input>
                <input type="text" className="formControl" value={customeraddress} onChange={e => setCustomeraddress(e.target.value)}></input>
              </div>
        
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={e => updateCustomer(e)}>Edit</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
        
            </div>
          </div>
        </div></Fragment>
    )
}

export default EditCustomer;