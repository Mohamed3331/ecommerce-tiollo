import React from "react";
import { ProductContext } from "../context";
import Filter from '../Components/ProductFilter'


class RoomContainer extends React.Component {

  static contextType = ProductContext

  render() {
    const {sortedProducts} = this.context
    
      return (
        <>
          <Filter products={sortedProducts} />
        </>
      )
  } 
}

export default RoomContainer