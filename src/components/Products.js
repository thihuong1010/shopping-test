import React from 'react';
import { useCart } from 'react-use-cart';

const Products = ({data}) => {
    const {addItem} = useCart();
    return (
        <>
        {data.map((prods, index) => (
            <div key={index} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={prods.image} className="card-img-top img-fluid" alt=""/>
                <div className="card-body text-center">
                    <h5 id="prod_title">{prods.title}</h5>
                    <h5>$ {prods.price}</h5>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example"> 
                        <button id="addtocart" type="button" className="btn btn-success" 
                        onClick={() => addItem(prods)}>Add to cart</button>
                    </div>
                </div>
            </div>
            </div>
        ))}
        </>
    )
}

export default Products
