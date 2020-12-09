import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {Author} from './App';
import {Supplier} from './App';
import {Order} from './App';
import {Book} from './App';
import {OrderItem} from './App';



if (window.location == "http://localhost:3000/customer") {
  document.getElementById('root').innerHTML = '';
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
} else if (window.location == "http://localhost:3000/author")
  {
    document.getElementById('root').innerHTML = '';
    ReactDOM.render(
      <React.StrictMode>
        <Author />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }else if (window.location == "http://localhost:3000/supplier") {
    document.getElementById('root').innerHTML = '';
    ReactDOM.render(
      <React.StrictMode>
        <Supplier />
      </React.StrictMode>,
      document.getElementById('root')
    );
  } else if (window.location == "http://localhost:3000/order") {
    document.getElementById('root').innerHTML = '';
    ReactDOM.render(
      <React.StrictMode>
        <Order />
      </React.StrictMode>,
      document.getElementById('root')
    );
  } else if (window.location == "http://localhost:3000/books") {
    document.getElementById('root').innerHTML = '';
    ReactDOM.render(
      <React.StrictMode>
        <Book />
      </React.StrictMode>,
      document.getElementById('root')
    );
  } else if (window.location == "http://localhost:3000/orderitem") {
    document.getElementById('root').innerHTML = '';
    ReactDOM.render(
      <React.StrictMode>
        <OrderItem />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

