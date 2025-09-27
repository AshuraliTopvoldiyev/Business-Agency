import React from 'react'
import "./Product.css"

function Product({item}) {
    console.log(item);
    
    return (
        <>
            <div className="disg">
                <img src={item.img} alt="" />
                <h4>{item.title}</h4>
                <h6>{item.desc}</h6>
                 <div className="arrow_hover">
                    <img src="/img/arrowhover.svg" alt="" />
                </div>
                </div>
               

        </>
    )
}

export default Product
