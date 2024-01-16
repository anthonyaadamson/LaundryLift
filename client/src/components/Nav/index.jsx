// //import { Link } from 'react-router-dom';
// // import Auth from '../../utils/auth';
// import './style.css'
// function Nav() {
// return (
//     <header className='bg-container'>
//         <div className="logo">
//             <a href="#">
//                 <img src="./src/assets/Logo.png" alt="Logo" /> Laundry Lift
//             </a>
//         </div>
//          <nav>
//             <div className="navbutton">
//                 <a href="/home">Home</a>
//             </div>
    
//             <div className="navbutton">
//                 <a href="/about">About Us</a>
//             </div>
                    
//             <div className="navbutton">
//                 <a href="/services">Services</a>
//             </div>

//             <div className="contactusnavbutton">
//                 <a href="/contact">Contact Us</a>
//             </div>

//             <div className="loginnavbutton">
//                 <a href="/login">Login</a>
//             </div>   
//         </nav>
//     </header>

//     )
// }

// export default Nav



//import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';
import React, { useState } from 'react'; // Import React and useState
import './style.css';

function Nav() {
  // Use useState to manage the state of the burger menu
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  // Toggle function to handle burger menu visibility
  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  return (
    <header className='bg-container'>
import Auth from "../../utils/auth";
import "./style.css";

function Nav() {

  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <ul>
          <li className="logoutnavbutton">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li className="loginnavbutton">
            <a href="/signup">Signup</a>
          </li>
          <li className="loginnavbutton">
            <a href="/login">Login</a>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="bg-container">
      <div className="logo">
        <a href="#">
          <img src="./src/assets/Logo.png" alt="Logo" /> Laundry Lift
        </a>
      </div>
      {/* Use the burgerMenuOpen state to conditionally render the navigation */}
      <nav className={burgerMenuOpen ? 'open' : ''}>
        <div className="navbutton">
          <a href="/home">Home</a>
        </div>

        <div className="navbutton">
          <a href="/about">About Us</a>
        </div>

        <div className="navbutton">
          <a href="/services">Services</a>
        </div>

        <div className="contactusnavbutton">
          <a href="/contact">Contact Us</a>
        </div>

        <div className="loginnavbutton">
          <a href="/login">Login</a>
        </div>
      </nav>
      {/* Burger menu button */}
      <div className="burger-menu" onClick={toggleBurgerMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
        {showNav()}
      </nav>
    </header>
  );
}

export default Nav;
