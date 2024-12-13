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




function App() {
  return (
    <div>

      <Router>
        
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/sidenav' element={<Sidenav />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/watches' element={<WatchesPage/>} />
          <Route path='/watches/:id' element={<WatchDisplay />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/shoes' element={<Shoes />} />
          <Route path='/bracelet' element={<Bracelet />} />
        </Routes>
      </Router>
      
   </div>
  )
}

export default App
