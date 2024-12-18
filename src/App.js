import React from 'react'
import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Components/Header'
import Sidenav from './Components/Sidenav'
import Dashboard from './Components/Modules/Dashboard'
import WatchesPage from './Components/Modules/WatchesPage';
import Wallet from './Components/Modules/Wallet';
import Shoes from './Components/Modules/Shoes';
import Bracelet from './Components/Modules/Bracelet';
import WatchDisplay from './Components/Modules/Display/WatchDisplay';
import WalletDisplay from './Components/Modules/Display/WalletDisplay';
import ShoeDisplay from './Components/Modules/Display/ShoeDisplay';
import BraceletDisplay from './Components/Modules/Display/BraceletDisplay';
import CartPage from './Components/Modules/Display/CartPage';
import { CartProvider } from './Components/Modules/Display/CartContext';




function App() {
  return (
    <div>

      <Router>
        <CartProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/sidenav' element={<Sidenav />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/watches' element={<WatchesPage/>} />
          <Route path='/watches/:id' element={<WatchDisplay />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/wallet/:id' element={<WalletDisplay />} />          
          <Route path='/shoes' element={<Shoes />} />
          <Route path='/shoes/:id' element={<ShoeDisplay />} /> 
          <Route path='/bracelet' element={<Bracelet />} />
          <Route path='/bracelet/:id' element={<BraceletDisplay />} />
          <Route path='/cartpage' element={<CartPage />} />
        </Routes>
        </CartProvider>
      </Router>
      
   </div>
  )
}

export default App
