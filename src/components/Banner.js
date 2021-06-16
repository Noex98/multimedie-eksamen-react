import React from 'react'

export default function Banner(props) {

    const image = {
        backgroundImage: props.image,
        backgroundColor: props.color
    }

    return (
            <div className="banner" style={image}>
                <div className="bannertext">
                    <h1>{props.header}</h1>
                    <p> {props.text}</p>
                </div>
            </div>
    )
}
