import React from 'react'
import "./Project.css"
import Product from '../../companents/product/Product'
import Get from '../../companents/get/Get'

function Project({product}) {
  return (
    <>
      <h1>
        <sectio className="project">
          <div className="container">
            <div className="portfolio">
              <h1>Our Portfolio</h1>
            </div>
            <div className="project_card">
             {
              product.map((item)=>{
                return <Product item={item}/>
              })
             }
            </div>
            <Get/>
          </div>
        </sectio>
      </h1>
    </>
  )
}

export default Project
