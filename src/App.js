import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './components/Main';
import Cart from './components/Cart';
import {CartProvider} from 'react-use-cart';
import Wishlist from './components/Wishlist';
import Cartgo from './components/Cartgo';
import Navbar from './components/Navbar';

function App() {
  /* fetch product */
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);

  return(
    <>
    <CartProvider>
      <Router>
        <Route exact path="/">
          <Navbar data={data}/>
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <Main data={data}/>
              </div>
              <div className="col-sm-4">
                <Cart data={data}/>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/wishlist">
          <Wishlist/>
        </Route>
        <Route path="/cartgo">
          <Cartgo data={data}/>
        </Route>
      </Router>
    </CartProvider>
    </>
  );
}

export default App;