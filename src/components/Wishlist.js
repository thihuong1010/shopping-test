import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';

function Wishlist() {
    /* fetch 5 carts */
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts?limit=5')
        .then((res) => res.json())
        .then((carts) => setCarts(carts));
    }, []);

    return (
        <section className="">
        <Navbar/>
        <div className="container justify-content-center">
            <div className="row">
                <h4 className="text-center" id="urwish">Your wishlist</h4>
                {carts.map((cart, index) => (
                    <div key={index} id="5carts">
                        <h5>ID {cart.id}</h5>
                        <table className="table table-light table-hover m-0">
                            <tbody>
                            {cart.products.map((subitem, i) => {
                            return (
                                <tr key={i}>
                                    <td>Product ID: {subitem.productId}</td>
                                    <td>Quantity: {subitem.quantity}</td>
                                </tr>
                            )
                            })}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Wishlist