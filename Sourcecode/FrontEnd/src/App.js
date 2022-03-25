import './App.css';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/navbar';
import HomePage from './pages/homepage/homepage';
import Footer from './components/footer/footer';
import LoginPage from "./pages/login-page/login-page"
import RegisterPage from "./pages/register-page/register-page"
import GamesPage from './pages/games-page/games-page';
import DetailedGame from './components/detailed-game/detailed-game';
import CartPage from './pages/cart-page/cart-page';
import CheckoutPage from './pages/checkout-page/checkout-page';
import Userprofile from './pages/user-profile/user-profile';
import ContactPage from './pages/contact-page/contact-page';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';
import ThankYou from './pages/thank-you-page/thank-you';


function App() {
  const [loggedUser,setLoggedUser] = useState(JSON.parse(sessionStorage.getItem("loggedUser")));

  return (
    <div className="App">
     <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
     <ScrollToTop />
     <Routes>
     <Route exact path="/" element={<HomePage />} />
     <Route exact path="/login" element={<LoginPage setLoggedUser={setLoggedUser} />} />
     <Route exact path="/register" element={<RegisterPage setLoggedUser={setLoggedUser} />} />
     <Route exact path="/games" element={<GamesPage />} />
     <Route exact path="/games/:id" element={<DetailedGame setLoggedUser={setLoggedUser}/>} />
     <Route exact path="/cart" element={<CartPage setLoggedUser={setLoggedUser} />} />
     <Route exact path="/checkout" element={<CheckoutPage setLoggedUser={setLoggedUser} />} />
     <Route exact path="/profile" element={<Userprofile setLoggedUser={setLoggedUser} loggedUser={loggedUser} />} />
     <Route exact path="/contact" element={<ContactPage loggedUser={loggedUser} />} />
     <Route exact path="/thank-you" element={<ThankYou loggedUser={loggedUser} />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
