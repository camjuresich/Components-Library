import React from 'react'

export default function BorderHeading({colorClass, children}) {
    const defaultColors = {
        warn: 'banner--heading--warn',
        error: 'banner--heading--error',
        success: 'banner--heading--success',
        info: 'banner--heading--info'
    }
    const defaultMessages = {
        warn: 'Attention',
        error: 'There is a probleme with your application',
        success: 'Congratulations!',
        info: 'Update available'
    }
   console.log(defaultColors[colorClass]) 
    return (
    <h2 
        className={`banner--heading 
        ${defaultColors[colorClass] ? defaultColors[colorClass] : colorClass }`}>
        {children ? children : defaultMessages[colorClass]}
    </h2>)
}

