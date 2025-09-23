import React from 'react'
import "./Project.css"
import Product from '../../companents/product/Product'
import Get from '../../companents/get/Get'

function Project() {
  return (
    <>
      <h1>
        <sectio className="project">
          <div className="container">
            <div className="portfolio">
              <h1>Our Portfolio</h1>
            </div>
            <div className="project_card">
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>
            <Get/>
          </div>
        </sectio>
      </h1>
    </>
  )
}

export default Project
