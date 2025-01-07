import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="side">
        <ul>
          <Link to={"/dashboard"} className="link"><li>Dashboard</li></Link>
          <Link to={"/watches"} className="link"><li>Watch</li></Link>
          <Link to={"/shoes"} className="link"><li>Shoes</li></Link>
          <Link to={"/wallet"} className="link"><li>Wallet</li></Link>
          <Link to={"/bracelet"} className="link"><li>Bracelet</li></Link>
          <Link to={"/Reactproject"} className="link"><li className="logout-btn">Logout</li></Link>
        </ul>
      </div>

      {/* Mobile Header (Horizontal Navbar) */}
      <div className="mobile-header">
        <ul>
          <Link to={"/dashboard"} className="link"><li>Dashboard</li></Link>
          <Link to={"/watches"} className="link"><li>Watch</li></Link>
          <Link to={"/shoes"} className="link"><li>Shoes</li></Link>
          <Link to={"/wallet"} className="link"><li>Wallet</li></Link>
          <Link to={"/bracelet"} className="link"><li>Bracelet</li></Link>
          <Link to={"/Reactproject"} className="link"><li className="logout-btn">Logout</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidenav;
