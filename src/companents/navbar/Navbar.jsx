import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <section className='navbar'>
                <div className="container">
                    <div className="logo">
                        <img src="/img/logo.svg" alt="" />
                    </div>
                    <div className="links">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/project"}>Project</Link>
                        <Link to={"/projectdetal"}>Projectdetal</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                    <button className='btns'>Get in touch</button>
                </div>
            </section>
        </>
    )
}

export default Navbar
