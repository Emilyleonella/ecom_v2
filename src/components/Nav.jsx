import React from 'react'
import {BrowserRouter as Router, Outlet, useRouteMatch, useParams} from "react-router-dom";


const Nav = () => {
  return (
    <>
      <header>
    {/* Navigation Bar*/}

    <nav>
      <img alt="bee_logo" class="bee" src="/images/bee__logo-removebg-preview (1).png" />
      <a class="link" href="/">Home</a>
      <a class="link" href="/Notebooks">Notebooks</a>
      <a class="link" href="/Contact">Contact</a>
      <a class="link" href="#"><img alt="shoping_cart" class="cart" src="/images/cart.png" /></a>
    </nav>

  </header>

      </>
  )
}

export default Nav



// import React from "react";

// import {
//     BrowserRouter as Router,
//     Outlet,
//     Link,
//     useRouteMatch,
//     useParams
//   } from "react-router-dom";



// export default class Nav extends React.Component{
//     render(){

//     return(

//     <div class="container">
//           <div class="navbar">
//               <div class="logo">
                 
//               </div>
//               <nav>
//                <ul id="MenuItems">
//                <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/profile">About</Link>
//           </li>
//                    <li><a href="">About</a></li>
//                    <li><a href="">Contact</a></li>
//                    <li><a href="account.html">Account</a></li>
//                </ul>
//               </nav>
//              <Outlet></Outlet>
//           </div>
          
//        </div>

//     )
    
//     }
// }