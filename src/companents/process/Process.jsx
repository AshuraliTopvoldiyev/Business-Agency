import React from 'react'
import "./Process.css"
function Process({item}) {
    console.log(item.img);
    
    return (
        <>
            <div className="min-call">
                <i id='left' class="fa-solid fa-chevron-right"></i>
                <img className='bor' src="/img/border.svg" alt="" />
                <button>
                    <img src={item.img} alt="" />
                    {item.title}
                </button>
                <p>{item.desc}</p>
            </div>
        </>
    )
}

export default Process
