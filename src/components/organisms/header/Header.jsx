import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <>
      <nav className="flex justify-between py-3 px-6 text-base shadow-slate-800">
        <div>
          <h1 className="font-bold text-base">News</h1>
        </div>
        <div className="flex gap-6 mx-6" >
          <Link to="/">Indonesia</Link>
          <Link to="/programming">Programming</Link>
          <Link to="/covid">Covid</Link>
          <Link to="/saved">Saved</Link>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Header;



  