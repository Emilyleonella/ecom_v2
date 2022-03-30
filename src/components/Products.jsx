// import { render } from "@testing-library/react";
import React from "react";
import ProductTem from "./ProductTem";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products:[], loading: false }; // dont load the data yet 
  
  }
  componentDidMount (){
    fetch("http://localhost:3001/products")
    .then((response)=>{
      // this.setState({
      //   products: response.status
      // })
      // this.state = response.status // storing the response inside this.state
        console.log(response);
        // console.log(response.json());
        return response.json();
    },

    (error)=>{
        this.setState({error:error});
        console.log(error.status);
    }
    )
    .then((data)=>{
        // holds the state 
        this.setState({products:data, loading: true}); // just setting the state , now load the data
        console.log(this.state)
    },
    
    );
}

render(){
  
  const inventory = this.state.products?.map((e, i )=>{
    <ProductTem
    key={e.id}
    name= {e.name}
    description= {e.description}
    price = {e.price}
    image = {e.images}
    />

  })
  
  return( <> {inventory} </>
  )
  }
}


// return create another companet (template for your prodcuts)
// use map to go through my products
// return another
//

// const Products = () => {

//   return (
//     <div>
//     {/* <main className='maincon'>
//       <section className='item'>
//         <div className='contain1'>
//           <img alt="notebook" className='nbook' src="images/notebook_r.jpeg"/>
//           <div className='overlay'>
//             <h1>2022-2023 Planner</h1>
//             <p className='description'>Full Year Calender With Flower Cover.</p>
//           </div>
//         </div>

//         <p className='price'>
//           $9.00
//           <button>Add to cart</button>
//         </p>
//       </section>
//     </main> */}
//     </div>
//   )
// }

export default Products;
