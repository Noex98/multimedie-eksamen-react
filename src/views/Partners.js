import React from 'react'
import Banner from '../components/Banner'
import {motion} from 'framer-motion'

function Partners() {
    return (
        <motion.main 
            className="partner__main"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >

            <Banner 
                    header="Partnere"
                    text="CLC Rustfri benytter sig af forskellige partnere, 
                    hold musen over nedenstående partnerlogoer for at læse mere og klik for link til deres hjemmeside."
                    image='url("../media/images/partner/pexels-magda-ehlers-2569844.jpg")'
                    color="rgba(0, 0, 0, 0.363)"
            />

            <div className="partnerContainer">

                <a href="https://www.lemu.dk/?gclid=CjwKCAjw1uiEBhBzEiwAO9B_HV3fPopS3SpPWc0dlPbbHe52dqcX6B65K_sz44KCaMzgVUN9IyrujhoC3VcQAvD_BwE">
                    <img src="/media/images/partner/lemvigmuller_XL.png" alt="lemvigmuller_XL" onmouseover="changeText('Lemvigh-Müller A/S er Danmarks mest betydende stål- og teknikgrossist. ')" onmouseout="defaultText()"/>
                </a>
                <p className="mobileText">Lemvigh-Müller A/S er Danmarks mest betydende stål- og teknikgrossist.</p>
                <a href="https://www.randerstegl.dk/?gclid=CjwKCAjw1uiEBhBzEiwAO9B_HcYt6wPY7jcn-4ZnjuDHHo9aYpbTfS_jEY-KdcIWvOFt1aAfiPFSshoCg_gQAvD_BwE">
                    <img src="/media/images/partner/RandersTegl_SortOrange.png" alt="RandersTegl_SortOrange" onmouseover="changeText('Hele Skandinaviens leverandør af produkter i ægte tegl. Bredt udvalg af mursten, tagsten, gulvsten, belægning')" onmouseout="defaultText()"/>
                </a>
                <p className="mobileText">Hele Skandinaviens leverandør af produkter i ægte tegl. Bredt udvalg af mursten, tagsten, gulvsten, belægning</p>
                <a href="https://www.stark.dk/">
                    <img src="/media/images/partner/stark-logo.jpg" alt="stark-logo" onmouseover="changeText('STARK tilbyder en lang række services til både entreprenører og professionelle håndværkere og beskæftiger cirka 2.500 medarbejdere')" onmouseout="defaultText()"/>
                </a>
                <p className="mobileText">STARK tilbyder en lang række services til både entreprenører og professionelle håndværkere og beskæftiger cirka 2.500 medarbejdere</p>
                <a href="http://jce.dk/">
                    <img src="/media/images/partner/unnamed.png" alt="jce" onmouseover="changeText('JC Engineering ApS leverer kvalitetsudstyr for pulver- og bulkhåndtering.')" onmouseout="defaultText()"/>
                </a>
                <p className="mobileText">JC Engineering ApS leverer kvalitetsudstyr for pulver- og bulkhåndtering</p>
                <a href="https://www.xl-byg.dk/?gclsrc=aw.ds&gclid=CjwKCAjw1uiEBhBzEiwAO9B_HZGOPW348Lg4AO1UgZDp8OjVhtgJks4x74RD18I0qbKDTmKdWVo_yRoCY8oQAvD_BwE">
                    <img src="/media/images/partner/xlBygf.png" alt="xlByg" onmouseover="changeText('Tømmerhandel og byggemarked til den professionelle og gør-det-selv folket.')" onmouseout="defaultText()"/>
                </a>
                <p className="mobileText">Tømmerhandel og byggemarked til den professionelle og gør-det-selv folket</p>
                <a href="https://www.dfds.com/">
                    <img src="/media/images/partner/DFDS_Logo_Positiv_2016_RGB.png" alt="dfds" onmouseover="changeText('DFDS er et dansk selskab, der driver rederi og logistikvirksomhed i Europa')" onmouseout="defaultText()"/>
                </a>
                <p className="mobileText">DFDS er et dansk selskab, der driver rederi og logistikvirksomhed i Europa</p>
            </div>

            <div id="textDisplay">
                CLC Rustfri benytter sig af forskellige samarbejdspartnere, både til anskaffelse af materialer og transport af produkter

            </div>
        </motion.main>
    )
}

export default Partners
