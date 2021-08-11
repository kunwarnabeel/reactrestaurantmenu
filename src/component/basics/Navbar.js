import React from "react";

const Navbar = ({filterItem,menuList}) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map( (ele) => {
          return (<><button onClick={() => filterItem(ele)} className="btn-group__item">{ele}</button></>)
        })}       
        </div>
      </nav>
    </>
  );
};

export default Navbar;
