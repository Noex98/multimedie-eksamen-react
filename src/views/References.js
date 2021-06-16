import React from 'react'
import Banner from '../components/Banner'
import {motion} from 'framer-motion'

function References() {
    return (
        <motion.main 
            class="referencer__main"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >

            <Banner 
                    header="Referencer"
                    text="For CLC Rustfri er det vigtigt at have gode kundekontakter, med vores mange år i 
                    branchen har vi massere af tilfredse kunder. Herunder ses udtaleser for både 
                    tidligere private kunder og virksomhedskunder."
                    image='url("../media/images/referencer/stair.jpg")'
                    color="rgba(0, 0, 0, 0.363)"
            />

            <div class="referenceContainer">
        

        
                <div class="imgContainer" id="personImgContainer">
                    <img class="personImg" src="media/images/referencer/person1.jpg" alt=""/>
                    <i class="mobileText">"Jeg har igennem årene brugt CLC rustfri mange gange, vi er en mindre produktionsvirksomhed der har brug for reparationer på vores maskiner ind i mellem, der har CLC hver gang leveret højkvalitet og flot håndværk" </i>
                    <i class="mobileText">"Peder konstruerede vores altan, til vores nybyggede villahus. Altanen står rigtig flot og vi er meget tilfredse" </i>
                    <img class="personImg" src="media/images/referencer/person2.jpg" alt=""/>
                    
                    <img class="personImg" src="media/images/referencer/person3.jpg" alt=""/>
                    <i class="mobileText">"CLC rustfri levere altid et godt stykke arbejde" </i>
                    <i class="mobileText">"Tingene bliver gjort til tiden og er der noget der haster så bliver det gjort i en fart, der er noget mig om min virksomhed sætter stor pris på" </i>
                    <img class="personImg" src="media/images/referencer/person4.jpg" alt=""/>
                </div>
            <div class="text">
                <h1>Citat fra tidligere kunder</h1>
                <div id="textDisplay"></div>
            </div>
            <div></div>
            </div>
            <img class="infographic" src="/media/images/referencer/infographic.png" alt="infografik"/>
            <img class="infographicMobile" src="media/images/referencer/infographicMobile.png" alt="infographicMobile"/>
        </motion.main>
    )
}

export default References
