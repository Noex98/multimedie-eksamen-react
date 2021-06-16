import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Header() {

    const [navOpen, setNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('')

    function burgerClick(){
        if (window.innerWidth < 768){
            setNavOpen(!navOpen)
            document.body.style.overflowY = document.body.style.overflowY === "hidden" ? 'auto' : 'hidden';
        }
    }

    window.addEventListener('scroll', () => {
        window.scrollY === 0 ? setIsScrolled (false) : setIsScrolled(true);
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768){
            setNavOpen(false)
        }
    })


    return (
        <>
        <header className={ isScrolled ? 'header--scrolled' : "" }>
            <div>
                <Link to="/">
                    <img src="./media/images/logoHvid.png" alt="Logo" / >
                </Link>
            </div>
            <nav className={ navOpen ? "nav-active" : "" }>
                <ul className="nav__links">
                    <li className={ navOpen ? "li--animation" : ""} style={{animationDelay: "0.2s"}}>
                        <Link 
                            to="portfolio" 
                            onClick={ () => {setActiveLink('portfolio'); burgerClick() }}
                            className={ activeLink === 'portfolio' ? 'navLink--active' : "" }
                            >Portfolio
                        </Link>
                    </li>
                    <li className={ navOpen ? "li--animation" : ""} style={{animationDelay: "0.3s"}}>
                        <Link 
                            to="referencer" 
                            onClick={ () => {setActiveLink('referencer'); burgerClick() }}
                            className={ activeLink === 'referencer' ? 'navLink--active' : "" }
                            >Referencer
                        </Link>
                    </li>
                    <li className={ navOpen ? "li--animation" : ""} style={{animationDelay: "0.4s"}}>
                        <Link 
                            to="partnere" 
                            onClick={ () => {setActiveLink('partnere'); burgerClick() }}
                            className={ activeLink === 'partnere' ? 'navLink--active' : "" }
                            >Partnere
                        </Link>
                    </li>
                    <li className={ navOpen ? "li--animation" : ""} style={{animationDelay: "0.5s"}}>
                        <Link 
                            to="kontakt" 
                            onClick={ () => {setActiveLink('kontakt'); burgerClick() }}
                            className={ activeLink === 'kontakt' ? 'navLink--active' : "" }
                            >Kontakt
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={`burger ${navOpen ? "burger-toggle" : ""}`} onClick={ burgerClick }>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </header>
        <div id="htmlOverlay" onClick={ burgerClick } className={`htmlOverlay ${navOpen ? "overlay--visible" : ""}`}></div>
        </>
    )
}
