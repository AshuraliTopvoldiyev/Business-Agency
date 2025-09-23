import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <>
      <section className='footer'>
        <div className="container">
          <div className="top_part">
            <div className="logo_part">
              <img src="/img/logolight.svg"
                alt="" />
              <p>We’re a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.</p>
            </div>
            <div className="pages_1">
              <h4 className='pow'>Pages </h4>
              <ul>
                <li><a href="">Home </a></li>
                <li><a href="">Home 2 </a></li>
                <li><a href="">About </a></li>
                <li><a href="">Conatct Us  </a></li>
                <li><a href="">Portfolio </a></li>
                <li><a href="">Portfolio Single </a></li>
              </ul>
            </div>
            <div className="pages_2">
              <h4 className='pow'>Utility Pages  </h4>
              <ul>
                <li><a href="">Style Guide  </a></li>
                <li><a href="">Instruction </a></li>
                <li><a href="">License</a></li>
                <li><a href="">Changelog</a></li>
                <li><a href="">Error  404  </a></li>
                <li><a href="">Password Protected  </a></li>
              </ul>
            </div>
            <div className="email">
              <h4 className='pow'>Subscribe</h4>
              <form action="">
                <input type="text" placeholder='Enter your email here' />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
          <div className="line">
          </div>
          <div className="bottom_part">
            <div className="bot_1">
              <h4 className="pow">
                Copyright by</h4>
              <ul>
                <li><a href="">Designed by Iconstica.com</a></li>
              </ul>
            </div>
            <div className="bot_1">
              <h4 className="pow">
                Contact Us</h4>
              <ul>
                <li><a href="">+0 12 457 4578</a></li>
              </ul>
            </div>
            <div className="bot_1">
              <h4 className="pow">
                Address</h4>
              <ul>
                <li><a href="">119 Tanglewood Lane Gulfport, MS 39503</a></li>
              </ul>
            </div>
            <div className="icons">
              <a href="">
                <img src="/img/facebook.svg" alt="" />
              </a>
               <a href="">
                <img src="/img/insta.svg" alt="" />
              </a>
               <a href="">
                <img src="/img/linkedin.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
