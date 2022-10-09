import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './Main';
import Search from './components/Search';
import ProductList from './components/ProductList';
import {Link, Nav, NavLink} from "react-router-dom";
import { useEffect, useState } from 'react';
import Update from './components/Update';


function App() {

  const [allData, setAllData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState ({
    title: '',
    prce: 0,
    description: ''
  });

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Main/> */}
          <Routes>
            <Route path="/" 
              element={<Main allData={allData} 
              setAllData={setAllData} 
              selectedProduct={selectedProduct} 
              setSelectedProduct={setSelectedProduct} />} />

            {allData.map((itm,idx)=>{return(
              <Route key={idx} path={`/${itm._id}`} 
              element={<ProductList product={itm}/> } ></Route>
            )})}

            {allData.map((itm,idx)=>{return(
              <Route key={idx} path={`/${itm._id}/edit`} 
              element={<Update product={itm}/> } ></Route>
            )})}

          </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
