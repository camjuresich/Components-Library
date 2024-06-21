import React from 'react'

export default function BannerDescription ({colorClass, children}) {
    const defaultColors = {
        warn:"banner--description--warn" ,
        error:"banner--description--error",
        info:"banner--description--info",
        success: "banner--description--success" 
    }
    console.log('hellooooo')
    return (
        <p 
            className={`banner--description ${defaultColors[colorClass] ? defaultColors[colorClass] : colorClass}`}>
                {children}
        </p>
    )
}