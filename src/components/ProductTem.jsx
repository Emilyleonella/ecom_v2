import React from 'react'
import Products from './Products'

const ProductTem = ({name, description, price, image}) => {
 
  return (
    <div>
      <main className='maincon'>
      <section className='item'>
        <div className='contain1'>
          <img alt="notebook" className='nbook' src={image}/>
          <div className='overlay'>
            <h1>{name}</h1>
            <p className='description'>{description}</p>
          </div>
        </div>

        <p className='price'>
          {price}
          <button>Add to cart</button>
        </p>
      </section>
    </main>
      </div>
  )
}

export default ProductTem