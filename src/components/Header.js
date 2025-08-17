import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            className="w-20 rounded-3xl transition-transform duration-300 hover:scale-105"
            src="https://i.ibb.co/My3Qb8kz/logo.png"
            alt="TastyEats Logo"
          />
          <span className="text-2xl font-bold text-green-800 tracking-widetransition">
            TastyEats
            </span>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="hidden md:flex items-center space-x-6 text-white font-medium">
            <li className="text-sm font-medium text-yellow-900 flex items-center gap-2 bg-yellow-400/90 px-3 py-1 rounded-full border border-yellow-500 shadow-md">
            <span>Status:</span>
            <span className="flex h-2 w-2 relative">
                <span
                className={`absolute inline-flex h-full w-full rounded-full ${
                    onlineStatus ? "bg-green-400" : "bg-red-400"
                } opacity-75 animate-ping`}
                ></span>
                <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                    onlineStatus ? "bg-green-600" : "bg-red-600"
                }`}
                ></span>
            </span>
            <span className="text-xs font-semibold">
                {onlineStatus ? "Online" : "Offline"}
            </span>
            </li>


            <li>
              <Link
                to="/"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="flex items-center space-x-1 hover:text-yellow-300 transition-colors duration-200"
              >
                <span className="font-semibold text-lg">Cart</span>
                <span>🛒</span>
                <span className="text-sm bg-yellow-400 text-black px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
