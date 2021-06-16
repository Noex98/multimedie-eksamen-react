import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import {motion} from 'framer-motion'

function Contact() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://eksamen-api.herokuapp.com/api/contact')
            .then(response => response.json())
            .then(result => {
                setIsLoaded(true)
                setData(result)
                console.log(result)
                })
            .catch(err => console.log(err))
    }, [])

    return (
        <motion.main 
            className="contact__main"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            
            <Banner 
                header="Kontakt"
                text=" Du er altid velkommen til at kontakte mig over telefonen, eller sende en mail.
                Til en uforpligtede snak, omkring dine ønsker og behov! "
                image='url("../media/images/contact/metalbanner.jpg")'
                color="rgba(0, 0, 0, 0.7)"
            />
        
            <div className="main__info">
                <div>
                    <a href="tel:28214224"><img src="./media/images/contact/telefon.png" className="telefon" alt=""/></a>
                    <p>
                        Telfon: <br/>
                        {isLoaded === true ? data.number : "Loading..."}
                    </p>
                </div>
                <div>
                    <a href="mailto:info@clc-rustfri.dk"> <img src="./media/images/contact/mail.png" className="mail" alt=""/></a>
                    <p>
                        E-mail: <br/>
                        {isLoaded === true ? data.email : "Loading..."}
                    </p>
                </div>
            </div>
            <div className="main__map">
                <p className="map__header">
                    Du finder clc-rustfri på: <br/>
                    Norgesvej 10, 8450 Hammel
                </p>
                <div id='map'></div>
            </div>
        </motion.main>
    )
}

export default Contact
