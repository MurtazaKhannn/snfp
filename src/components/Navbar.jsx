import React, { useContext, useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { HContext } from "../utils/HomeContext";
import Item from "./Item";
// import { IoSettings, IoSettingsSharp } from 'react-icons/io5'

const Navbar = () => {
  const { all_Products, getTotalCartItems } = useContext(HContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [visibleSearch, setVisibleSearch] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const results = all_Products.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase()),
    );
    setSearchResults(term == "" ? [] : results);
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      setVisibleSearch(true);
    } else {
      setVisibleSearch(false);
    }
  }, [searchTerm]);

  const [menu, setMenu] = useState(null);
  return (
    <div className="w-full font-bebas flex flex-col items-center">
      <div className="w-full z-[3] h-[7vh] p-2 bg-[#DCC48E] flex justify-between items-center">
        <Link to="/">
          <a className="ml-5 font-bold text-white font-bebas text-2xl hover:text-[#27233A]">SILVA-NEST</a>
        </Link>
        <form className="flex gap-2" action="">
          <input
            className="h-6 p-4 outline-none rounded-md"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          {/* <div>
            <button></button>
          </div> */}
        </form>

        <div className=" flex gap-5 items-center justify-center">
          <button className="hover:text-[#EAEFD3]">Terms and Conditions</button>
          <button className="hover:text-[#EAEFD3]">Privacy Policy</button>
          <button className="hover:text-[#EAEFD3]">About Us</button>
          {localStorage.getItem('auth-token') ? <button onClick={() => {localStorage.removeItem('auth-token') ; window.location.replace('/')}}>Logout</button> : <Link to="/login" className="hover:text-[#EAEFD3] hover:scale-125 p-1 rounded-md border-black">
            Login/Sign-Up
          </Link>}
          
          <div className="flex gap-5 items-center justify-center">
            <Link to="/cart" className="relative text-xl mr-5 mt-2">
              <h3 className="absolute rounded-full h-[2vh] w-[2vh] flex justify-center items-center bg-red-700 text-xs text-white mt-[-1.5vh] ml-[1.5vh]">
                {getTotalCartItems()}
              </h3>
              <span className="size-8">
                <IoMdCart size={"1.2em"} />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[80%] z-[2]  gap-20 rounded-[2vh] mt-[-6px]  flex items-center justify-center h-9">
        <Link
          onClick={() => {
            setMenu("filefolder");
          }}
          to="/filefolder"
          className={`hover:text-yellow-400 ${menu === "filefolder" ? "font-bold text-yellow-400 text-lg" : ""} hover:scale-110`}
        >
          File-Folder
        </Link>
        <Link
          onClick={() => {
            setMenu("wallet");
          }}
          to="/wallet"
          className={`hover:text-yellow-400 ${menu === "wallet" ? "font-bold text-yellow-400 text-lg" : ""} hover:scale-110`}
        >
          Wallet
        </Link>
        <Link
          onClick={() => {
            setMenu("mosquitonet");
          }}
          to="/mosquitonet"
          className={`hover:text-yellow-400 ${menu === "mosquitonet" ? "font-bold text-yellow-400 text-lg" : ""} hover:scale-110`}
        >
          Mosquito Net
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <p
          className={`cursor-pointer hover:opacity-70 ${searchTerm.length > 0 ? "block" : "hidden"}`}
          onClick={() => {
            setVisibleSearch(true);
          }}
        ></p>
      </div>
      <div className="flex overflow-x-hidden flex-wrap p-3 gap-2 items-center justify-center">
        {visibleSearch
          ? searchResults.map((item, i) => (
              <li
                className=" p-1 list-none"
                key={i}
                onClick={() => {
                  setVisibleSearch(false);
                }}
              >
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  img={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  instock={item.instock}
                  category={item.category}
                />
              </li>
            ))
          : null}
      </div>
    </div>
  );
};

export default Navbar;
