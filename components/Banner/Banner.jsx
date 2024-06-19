import React from 'react'
import { BsFillInfoCircleFill } from "react-icons/bs"; // info
import { BsXCircleFill } from "react-icons/bs"; // close
import { BsExclamationTriangleFill } from "react-icons/bs"; // warning
import { FaCheckCircle } from "react-icons/fa"; // check

export default function Banner({children, type}) {
    // four colors per message type
    

    return (
        <>
        <BsFillInfoCircleFill/>
        <BsXCircleFill/>
        <BsExclamationTriangleFill/>
        <FaCheckCircle />
        </>

    )
}