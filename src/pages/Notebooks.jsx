import React from 'react'
import Products from '../components/Products'
// import ProductTem from '../components/ProductTem'

const products = () => {

  return (
    <div>
      <section className='container'>
      <p className='quote'>With organization comes empowerment</p>
      <div className='para3'></div>
    </section>
    <Products/>
    {/* <figure className="example">
      <img alt="notebook_example" className="fig" src="images/ex4.jpeg" />
      <img alt="notebook_example" className="fig" src="images/ex_3.jpg " />
      <img alt="notebook_example" className="fig" src="images/ex.jpeg" />
    </figure> */}
    <aside className="up">
      <a className="arrowup" href="#"
        ><img alt="arrow_up" src="images/arrow2.png"
      /></a>
      <h1 className="headup">UP</h1>
    </aside>
    </div>
  )
}

export default products