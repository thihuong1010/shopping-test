import React from "react";
import { useParams } from "react-router-dom";

const CardDetail = ({data}) => {
    let { id } = useParams();  
    return (
        <section className="detail">
            <div className="container">
                {data
                .filter((prods) => prods.id === id)
                .map((prods, index) => (
                    <div key={index} className="cardDetail">
                        {prods.title}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CardDetail;