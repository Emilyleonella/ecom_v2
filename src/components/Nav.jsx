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



// import React from "react";

// import {
//     BrowserRouter as Router,
//     Outlet,
//     Link,
//     useRouteMatch,
//     useParams
//   } from "react-router-dom";



// export default  Nav extends React.Component{
//     render(){

//     return(

//     <div ="container">
//           <div ="navbar">
//               <div ="logo">
                 
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