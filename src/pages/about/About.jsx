import React from 'react'
import "./About.css"
import Actives from '../../companents/actives/Actives'
import Team from '../../companents/team/Team'
import Get from '../../companents/get/Get'

function About() {
  return (
    <>
      <section className='about'>
        <div className="container">
          <div className="a_info">
            <h4>Pleasure and so read the was hope.</h4>
            <h1>Ready to take <span>your business</span> <br />to the next level?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar.</p>
            <div className="rated">
              <img src="/img/rated.svg" alt="" />
              <div className="rated_info">
                <h4>Rated 4.9/5 stars</h4>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>

              </div>
            </div>
          </div>
          <div className="a_img">
            <img src="/img/imgus.png" alt="" />
          </div>
        </div>
      </section>
      <section className="active">
        <div className="container">
          <Actives />
        </div>
      </section>
      <section className="our_mission">
        <div className="container">
          <div className="mission_info">
            <h3>Our Mission</h3>
            <h1>Boost your with your business.</h1>
            <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.</p>
            <div className="missions_part">
              <div className="act">
                <img src="/img/tick.svg" alt="" />
                <h5>Moonlight newspaper up its
                  enjoyment</h5>
              </div>
              <div className="act">
                <img src="/img/tick.svg" alt="" />
                <h5>She new course gets living.</h5>
              </div>
              <div className="act">
                <img src="/img/tick.svg" alt="" />
                <h5>She new course gets living.</h5>
              </div>
              <div className="act">
                <img src="/img/tick.svg" alt="" />
                <h5>Rooms oh fully taken by worse.</h5>
              </div>
              <div className="act">
                <img src="/img/tick.svg" alt="" />
                <h5>Perceived end certainly day.</h5>
              </div>
              <div className="act">
                <img src="/img/tick.svg" alt="" />
                <h5>Preference any astonished
                  unreserved Mrs.</h5>
              </div>
            </div>
          </div>
          <div className="mission_img">
            <div className="mis_img1">
              <img src="/img/mis1.png" alt="" />
              <div className="mis_actives">
                <div className="mis1_active">
                  <h1>10k</h1>
                  <p>Great conversations
                    per month</p>
                </div>
                <div className="mis2_active">
                  <h1>95+</h1>
                  <p>Project Complete </p>
                </div>
              </div>
            </div>
            <div className="mis_img2">
              <img src="/img/mis2.png" alt="" />
            </div>
            <div className="member">
              <h4>Team memember</h4>
              <img src="/img/members.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="team">
        <div className="container">
          <h1>Our team</h1>
          <Team />
        </div>
      </section>
     <Get/>
    </>
  )
}

export default About
