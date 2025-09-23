import React from 'react'
import "./Home.css"
import Product from '../../companents/product/Product'
import Services from '../../companents/services/Services'
import Process from '../../companents/process/Process'

function Home() {
  return (
    <>
      <section className='home'>
        <div className="container">
          <div className="hero">
            <div className="hero_info">
              <h1>Ready to take your <span>Business Growth</span> to the next level?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
              <button className='btn'><img src="/img/arrow.svg" alt="" />Start your Free Trial</button>
              <h4>Trusted by Leading Brands</h4>
              <div className="hero_logos">
                <img src="/img/logos1.svg" alt="" />
                <img src="/img/logos2.svg" alt="" />
                <img src="/img/logos3.svg" alt="" />
                <img src="/img/logos4.svg" alt="" />
              </div>
            </div>
            <div className="hero_img">
              <img src="/img/heroimg.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="container">
          <h3 className="row">Our Services </h3>
          <h1 className='sec_row'>High-impact services
            for your business</h1>
          <div className="box">
            <Services />
            <Services />
            <Services />
            <Services />
            <Services />
            <Services />
          </div>
        </div>
      </section>
      <section className="about_us">
        <div className="container">
          <div className="about_img">
            <img src="/img/imgus.png" alt="" />
          </div>
          <div className="about_info">
            <h4 className="row">About us </h4>
            <h1>The core mission <br />
              behind all our <br />
              work</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.</p>
            <div className="status">
              <div className="st_1">
                <h2><span>330</span> +</h2>
                <h5>Companies helped</h5></div>
              <div className="st_1">
                <h2><span>230</span> +</h2>
                <h5>Revenue generated</h5></div>
            </div>
            <button className='btn'><img src="/img/arrow.svg" alt="" />Start your Free Trial</button>
          </div>
        </div>
      </section>
      <section className="procces">
        <div className="container">
          <h2 className="row">Process</h2>
          <h1 className="sec_row">
            Process that moves
            things forward
          </h1>
          <div className="call">
            <Process />
            <Process />
            <Process />
            <Process />
          </div>
          <h1 className="sec_row">Recent Showcase</h1>
          <div className="design_imgs">
            <div className="card_ds">
              <Product />
              <Product />
            </div>
            <div className="card_ds2">
              <button className='btn'><img src="/img/arow2.svg" alt="" />Start your Free Trial</button>
              <Product />
              <Product />

            </div>

          </div>
          <div className="user">
            <img src="/img/user.svg" alt="" />
            <h3>“Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.”</h3>
            <h4>Jacqueline Miller</h4>
            <h5>CEO of an eduport</h5>
            <div className="arrows">
              <button><i class="fa-solid fa-chevron-left"></i></button>
              <button><i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
