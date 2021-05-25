import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();
    console.log(params.p1)
    return (
        <section>
            <h1>this is product-detail page.</h1>
            <h2>{params.p1}</h2>
        </section>
    )
}

export default ProductDetails;
