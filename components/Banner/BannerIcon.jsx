import React from 'react'
import { BsFillInfoCircleFill } from "react-icons/bs"; // info
import { BsXCircleFill } from "react-icons/bs"; // close
import { BsExclamationTriangleFill } from "react-icons/bs"; // warning
import { FaCheckCircle } from "react-icons/fa"; // check


export default function BannerIcon ({icon, colorClass}) {
    /* if you wish to use a custom icon you must specify a 
    colorClass as well.
    */
    const IconDefaults = {
        warn: BsExclamationTriangleFill,
        error: BsXCircleFill,
        success: FaCheckCircle,
        info: BsFillInfoCircleFill

    }

    const colorDefaults = {
        warn: "banner--icon--warn",
        error: "banner--icon--error",
        success: "banner--icon--success",
        info: "banner--icon--info"
    }
    console.log(colorClass)
    if (colorClass) colorDefaults.color = colorDefaults[colorClass] || colorClass
    else colorDefaults.color = colorDefaults[icon]
    if (typeof icon === 'string' && IconDefaults[icon]) {
        console.log('running?')
        IconDefaults.icon = IconDefaults[icon]
        return <IconDefaults.icon className={`${colorDefaults.color} banner--icon`}/>
    } 
    else {
        const Icon = icon
        return (
            <Icon className={`${colorDefaults.color} banner--icon`}/>
        )
    }
}