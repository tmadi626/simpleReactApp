import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';


function App() {
  return (
    <div className="relative pb-10 min-h-screen">

      <Router>
        <Header/>


        <div className='p-3'>
          <Routes>
            
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>} ></Route>
            <Route exact path="/products/:id" element={<Product/>} ></Route>

          </Routes>
        </div>

        <Footer/>
      </Router>

    </div>
  );
}

export default App;
