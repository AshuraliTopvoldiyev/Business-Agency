import React from 'react'
import "./Services.css"

function Services({item}) {
    
    return (
        <>
            <div className="card">
                <button><i class={item.img}></i></button>
                <h4>{item.title} </h4>
                <p>{item.desc}</p>
            </div>
        </>
    )
}

export default Services
