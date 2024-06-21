import React from 'react'
import BannerIcon from "./BannerIcon"
import BannerHeading from "./BannerHeading"
import BannerDesripiton from "./BannerDescription"


export default function Banner({children, type}) {
    /** if you wish to change anything about the component you 
     * must include all of your own Banner Components 
     * Banner.Description, Banner.Heading, Banner.icon must be included
     */
    const defaultColors = {
        warn: 'banner--background--warn', 
        error: 'banner--background--error',
        success:'banner--background--success',
        info: 'banner--background--info'
    }

    console.log(children)
    if (!children) {
        return (
         <div className={`banner banner--no--desc ${defaultColors[type] ? defaultColors[type] : type }`}>
            <BannerIcon icon={type /* optional parameters: colorClass, icon*/}/>
            <BannerHeading colorClass={type}/> {/* if children are present show the children text */}
        </div>
  
        )
    }
    if (typeof children === 'object') {
        console.log('it do be runnin', children)
        return <div className={`banner ${defaultColors[type] ? defaultColors[type] : type }`}>{children}</div>
    }

    return (
        <div className={`banner ${defaultColors[type] ? defaultColors[type] : type }`}>
            <BannerIcon icon={type /* optional parameters: colorClass, icon*/}/>
            <BannerHeading colorClass={type}/> {/* if children are present show the children text */}
            <BannerDesripiton colorClass={type}>{children}</BannerDesripiton>
        </div>
    )
}