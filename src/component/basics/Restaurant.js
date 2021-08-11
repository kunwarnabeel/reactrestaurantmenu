import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
// import Navbar from "./Navbar";

const categoryList = [...new Set(
    Menu.map((ele)=>{
        return ele.category;
    })
),'all']; 

//... spread operator to convert into single array 
//new Set to remove duplicate entries
//[] to convert into array

//console.log(categoryList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(categoryList);
  const filterItem = (category) => {
    if(category==='all'){
        return setMenuData(Menu);
        
    }
    const updatedList = Menu.filter((ele)=>{
        return ele.category===category;
    })
    setMenuData(updatedList);
    //console.log(updatedList);
  };
  
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
