import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, useState } from 'react';
import LongForm from './compnent/LongForm';
import Counter from './Counter';
import { RouterProvider } from 'react-router-dom';
import router from './rutes/Routers';
import { createContext } from 'react';
const PRODUCT_CONTEXT=createContext();

function App() {

  const [data,setData]=useState([])

  useEffect(()=>{
      fetch("product.json")
      .then(res=>res.json())
      .then(data=>setData(data))
  },[])

const value={
  data,
}




  return (
    <div className="App">
      <PRODUCT_CONTEXT.Provider value={value}>
<RouterProvider router={router} />
</PRODUCT_CONTEXT.Provider>

 
    </div>
  );
  
}

export default App;
