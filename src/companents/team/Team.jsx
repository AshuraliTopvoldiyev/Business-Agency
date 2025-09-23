import React from 'react'
import "./Team.css"

function Team() {
    return (
        <>

            <div className="team_box">
                <div className="team_card">
                    <img src="/img/team1.png" alt="" />
                    <h2>Esther Howards</h2>
                    <h4>Founder & CEO</h4>
                    <div className="team_icons">
                        <img src="/img/facebook.svg" alt="" />
                        <img src="/img/insta.svg" alt="" />
                        <img src="/img/linkedin.svg" alt="" />
                    </div>
                </div>
                <div className="team_card">
                    <img src="/img/team2.png" alt="" />
                    <h2>Cameron Williamson</h2>
                    <h4>Marketing Head</h4>
                    <div className="team_icons">
                        <img src="/img/facebook.svg" alt="" />
                        <img src="/img/insta.svg" alt="" />
                        <img src="/img/linkedin.svg" alt="" />
                    </div>
                </div>
                <div className="team_card">
                    <img src="/img/team3.png" alt="" />
                    <h2>Liam Cooper</h2>
                    <h4>Marketing Head</h4>
                    <div className="team_icons">
                        <img src="/img/facebook.svg" alt="" />
                        <img src="/img/insta.svg" alt="" />
                        <img src="/img/linkedin.svg" alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Team
