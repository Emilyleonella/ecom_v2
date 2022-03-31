import React from 'react'
import {BrowserRouter as Router, Outlet, useRouteMatch, useParams} from "react-router-dom";


const Nav = () => {
  return (
    <>
      <header>
    {/* Navigation Bar*/}

    <nav>
      <img alt="bee_logo" className='bee' src="/images/bee__logo-removebg-preview (1).png" />
      <a className="link" href="/">Home</a>
      <a className="link" href="/Notebooks">Notebooks</a>
      <a className="link" href="/Contact">Contact</a>
      <a className="link" href="#"><img alt="shoping_cart" className="cart" src="/images/cart.png" /></a>
    </nav>

  </header>

      </>
  )
}

export default Nav



