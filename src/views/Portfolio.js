import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import {motion} from 'framer-motion'

function Portfolio() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('alle')

    const fetchURL = 'https://eksamen-api.herokuapp.com'

    useEffect(() => {
        fetch('https://eksamen-api.herokuapp.com/api/img')
            .then(response => response.json())
            .then(result => {
                setIsLoaded(true)
                setData(result)
                })
            .catch(err => console.log(err))
    }, [])

    return (
        <motion.main 
            className="gallery__main"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <Banner 
                header="Portfolio"
                text="Efter mange års erfaring, har jeg jeg lavet mange projekter.
                Her ser du et udsnit af hvad jeg kan lave."
                image='url("./media/images/gallery/pexels-josiah-farrow-3396668.jpg")'
                color="rgba(0, 0, 0, 0.363)"
            />
    
        <div className="main__bgWrap">
            <div className="main__btnContainer">
                <button
                    className={filter === 'alle' ? 'filter--active' : '' }
                    onClick={()=> setFilter('alle')}
                    >Alle
                </button>
                <button
                    className={filter === 'trappe' ? 'filter--active' : '' }
                    onClick={()=> setFilter('trappe')}
                    >Trapper
                </button>
                <button
                    className={filter === 'altan' ? 'filter--active' : '' }
                    onClick={()=> setFilter('altan')}
                    >Altaner
                </button>
                <button
                    className={filter === 'special' ? 'filter--active' : '' }
                    onClick={()=> setFilter('special')}
                    >Special
                </button>
            </div>
    
            <div className="main__imgContainer">
                {
                    isLoaded === true ?
                    data.map(image => {
                        return(
                            <img 
                                src={fetchURL + image.url} 
                                alt={image.alt} 
                                data-tag={image.tag}
                                className={filter !== image.tag && filter !== 'alle' ? 'img--hidden' : '' }
                            />
                        )
                    })
                    :
                    <div>Loading images...</div>
                }
            </div>
        </div>
    
        </motion.main>
    )
}

export default Portfolio