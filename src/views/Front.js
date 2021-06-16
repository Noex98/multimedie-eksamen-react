import React from 'react';
import {motion} from 'framer-motion'

function Front() {
    return (
    <motion.main 
        className="index__main"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
        <div className="main__intro">
            <div className="intro__logo">
                <img src="./media/images/logoHvid.png" alt="logo"/>
            </div>
            <div id="intro__arrow" className="intro__arrow">
                <img src="./media/images/index/downArrow.svg" alt="Scroll down button"/>
            </div>
        </div>
        <div className="main__concept">
            <div className="concept__card">
                <img src="./media/images/index/mask.png" alt="Icon"/>
                <h1>Hvem er CLC rustfri?</h1>
                <p>
                    CLC rustfri er en 
                    enkeltmandsvirksomhed, med masser af resourcer. Jeg går op i at producere 
                    kvalitet, og skabe glade kunder.
                </p>
            </div>
            <div className="card">
                <img src="./media/images/index/person.png" alt="Icon"/>
                <h1>Hvad kan jeg?</h1>
                <p>
                    Jeg kan lave stort set alt i metal, tag kontakt til mig og jeg kan lave 
                    lige det som du står om mangler.
                </p>
            </div>
            <div className="card">
                <img src="./media/images/index/handshake.png" alt="Icon"/>
                <h1>Hvordan er priserne?</h1>
                <p>
                    Priser er meget varierende, få en uforpligtende samtale med mig, og så 
                    vil jeg vende tilbage med en estimeret pris.
                </p>
            </div>
        </div>
        <div className="main__video">
            <div id="shortVidCont" className="video__short">
                <video muted autoPlay loop src="./media/videos/shortVid.mp4"></video>
                <div className="short__btn" id="short__btn">
                    <img src="media/images/index/startBtn.svg" alt="Start Button"/>
                    <div className="btn__outline"></div>
                </div>
            </div>
            <div id="fullVidCont" className="video__full">
                <video controls id="fullVid" src="./media/videos/presentation.mp4"/>
            </div>
        </div>
        <div className="main__gallery">
            <div className="gallery__wrap" id ="galleryWrap">
                <div id="prevBtn">
                    <img src="./media/images/index/downArrow.svg" alt="arrow"/>
                </div>
                <div className="wrap__slide" id="slider">
                    <img src="/media/images/gallery/altan.JPEG" alt="Altan"/>
                    <img src="/media/images/gallery/altansort.jpeg" alt="Altan"/>
                    <img src="/media/images/gallery/altangelander.jpg" alt="Altan"/>
                    <img src="/media/images/gallery/altanhus.jpg" alt="Altan"/>
                    <img src="/media/images/gallery/bro.jpg" alt="bro"/>
                    <img src="/media/images/gallery/trappe.JPG" alt="trappe"/>
                    <img src="/media/images/gallery/trappe2.jpeg" alt="trappe"/>
                    <img src="/media/images/gallery/toender.jpg" alt="toender"/>
                    <img src="/media/images/gallery/toender1.jpg" alt="Toender"/>
                    <img src="/media/images/gallery/toender1-kopi.jpg" alt="Toender1"/>
                    <img src="/media/images/gallery/dr1.jpeg" alt="DR studiet"/>
                    <img src="/media/images/gallery/IMG_3611.jpeg" alt="DR studiet"/> 
                </div>
                <div id="nextBtn">
                    <img src="./media/images/index/downArrow.svg" alt="arrow"/>
                </div>
            </div>
            <div className="gallery__cta">
                <a className="cta__link" href="portfolio.html">
                    Se galleri
                </a>
            </div>
        </div>
    </motion.main>
    )
}

export default Front
