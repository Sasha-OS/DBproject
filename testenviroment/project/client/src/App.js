import React, {Fragment} from "react";
import './App.css';

//components

//customer
import InputCustomer from "./Components/InputCustomer";
import ListCustomers from "./Components/ListCustomer";
//author
import InputAuthor from "./Components/InputAuthor";
import ListAuthor from "./Components/ListAuthor";
//supplier
import InputSupplier from "./Components/InputSupplier";
import ListSuppliers from "./Components/ListSupplier";
//order
import InputOrder from "./Components/InputOrder";
import ListOrders from "./Components/ListOrder";
//books
import InputBook from "./Components/InputBook";
import ListBooks from "./Components/ListBook";
//orderitem
import InputOrderitem from "./Components/InputOrderitem";
import ListOrderItems from "./Components/ListOrderitem";

  export function App() {
    return (
      <Fragment>
        <div className="container">
        <InputCustomer></InputCustomer>
        <ListCustomers></ListCustomers>
      </div>
      
     </Fragment>
  );
}

  export function Author() {
    return (
      <Fragment>
        <div className="container">
        <InputAuthor></InputAuthor>
        <ListAuthor></ListAuthor>
     </div>
     </Fragment>
);
}

export function Supplier() {
  return (
    <Fragment>
      <div className="container">
      <InputSupplier></InputSupplier>
      <ListSuppliers></ListSuppliers>
   </div>
   </Fragment>
);
}

export function Order() {
  return (
    <Fragment>
      <div className="container">
      <InputOrder></InputOrder>
      <ListOrders></ListOrders>
   </div>
   </Fragment>
);
}

export function Book() {
  return (
    <Fragment>
      <div className="container">
      <InputBook></InputBook>
      <ListBooks></ListBooks>
   </div>
   </Fragment>
);
}
export function OrderItem() {
  return (
    <Fragment>
      <div className="container">
      <InputOrderitem></InputOrderitem>
      <ListOrderItems></ListOrderItems>
   </div>
   </Fragment>
);
}
  
//export default App;
//export default Author;


