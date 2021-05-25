import React from 'react';
import {Link} from 'react-router-dom'

const Products = () => {
  return (
  <section>
      <h1>Products Page..🐤</h1>
      <ul>
          <li><Link to='/products/p1'>SetupBox</Link></li>
          <li><Link to='/products/p2'>Modem</Link></li>
          <li><Link to='/products/p3'>Refrigerator</Link></li>
          <li><Link to='/products/p4'>Dvd</Link></li>
       
      </ul>
  </section>
  )
}

export default Products;
