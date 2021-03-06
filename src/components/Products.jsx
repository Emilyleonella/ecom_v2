// import { render } from "@testing-library/react";

import React from "react";
import ProductTem from "./ProductTem";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inventory: [], loading: false }; // dont load the data yet
  }
  componentWillMount() {
    fetch("https://dbecom.herokuapp.com/products")
      .then(
        (response) => {
          // this.setState({
          //   products: response.status
          // })
          // this.state = response.status // storing the response inside this.state
          console.log(response);
          // console.log(response.json());
          return response.json();
        },

        (error) => {
          this.setState({ error: error });
          console.log(error.status);
        }
      )
      .then((data) => {
        // holds the state
        this.setState({ inventory: data, loading: true }); // just setting the state , now load the data
        console.log(this.state);
      });
  }

  render() {
    return this.state.inventory.map((e) => (
      <ProductTem
        key={e.id}
        name={e.name}
        description={e.description}
        price={e.price}
        image={e.images}
      />
    ));
  }
}

export default Products;
