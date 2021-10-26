import React from 'react';
import {FaTree} from 'react-icons/fa';
import {BsFillSuitHeartFill} from 'react-icons/bs';
import {BsFillCartFill} from 'react-icons/bs';
import { useCart } from 'react-use-cart';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const { totalUniqueItems } = useCart();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#/">Droppe Xmas <FaTree id="fatree"/> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarText" aria-controls="navbarText" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link id="home" to={`/`}>Home</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <Link id="wishlist" to={`/wishlist`}><BsFillSuitHeartFill/></Link>
                    </span>
                    <span className="navbar-text">
                        <Link id="cartgo" to={`/cartgo`}><BsFillCartFill/>{totalUniqueItems}</Link>
                    </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar