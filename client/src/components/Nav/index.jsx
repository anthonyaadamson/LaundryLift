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
import { useState } from "react"; // Import React and useState
import Auth from "../../utils/auth";
import "./style.css";

function Nav() {
  // Use useState to manage the state of the burger menu
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  // Toggle function to handle burger menu visibility
  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };

  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <span>
          <div className="logoutnavbutton nav-buttons">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </div>
        </span>
      );
    } else {
      return (
        <span>
        <div className="signinnavbutton nav-buttons">
          <a href="/signup">
            Signup
          </a>
          </div>
          <div className="loginnavbutton nav-buttons">
          <a href="/login">
            Login
          </a>  
        </div>
        </span>
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
      <nav className={burgerMenuOpen ? "open" : ""}>
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
        {/* Burger menu button */}

        {showNav()}
      </nav>
      <div className="burger-menu" onClick={toggleBurgerMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}
export default Nav;
