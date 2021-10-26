import React from 'react';
import Products from './Products';

const Main = ({data}) => {
    return (
        <>
        <h4 className="text-center mt-3">Products</h4>
        <section className="container py-4">
                <div className="row justify-content-center">
                    <Products data={data}/>
                </div>
        </section>
        </>
    )
}

export default Main
