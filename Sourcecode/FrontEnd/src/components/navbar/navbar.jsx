import React,{useState} from "react";
import "./navbar.css";
import { Link} from "react-router-dom";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const NavBar = (props) => {
  
    const [navBarActive, setNavBarActive] = useState(false)
    const [hidden,setHidden] = useState(true);
    const [hiddenCart,setHiddenCart] = useState(true);

    

  const showMenu = () => {
    setNavBarActive(!navBarActive)
    setHidden(true)
  };

  
  const handleHidden = () => {
    setHiddenCart(!hiddenCart)
  }
  const signOut = () => {
    sessionStorage.removeItem("loggedUser");
    props.setLoggedUser("")
  }
   
    return (
      <div className="header">
        <div onClick={showMenu}>
          <i className="fas fa-bars burgerMenu"></i>
        </div>

        <div className="nav">
          <div className="navCenter">
         <Link to="/"><img className="logo" src="images/snakesladders.png" alt="logo" /></Link>
          </div>
          <ul className={`${navBarActive ? "activeBurger" : ""} topList`}>
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            {props.loggedUser ?  !props.loggedUser.role_as ? <div className="sign-out">
              <li><Link to="/profile">Profile</Link></li>
              <li onClick={signOut}><Link to="/login">Sign Out</Link></li> 
            </div>  :  <div className="sign-out">
              <li><a href="http://localhost:8000/dashboard">Dashboard</a></li>
              <li onClick={signOut}><Link to="/login">Sign Out</Link></li> 
            </div>  : <li>
              <Link to="/login">SIGN IN</Link>
            </li>}  
          </ul>
          {props.loggedUser ? <div className="shoppingCart" onClick={handleHidden}>
              <ShoppingIcon className="shopping-icon"/>
              <span className="item-count">{props.loggedUser.cartItems.reduce((total,item) => total + item.quantity, 0)}</span>
          </div>: null}
          
        </div>
        {hiddenCart ? null : <CartDropdown loggedUser={props.loggedUser} handleHidden={setHiddenCart} setLoggedUser={props.setLoggedUser} />}
      </div>
    );
  
}

export default NavBar;