import React from 'react'

export default function Badge({children, color, shape}) {
    const colors = {
        gray: ["F3F4F6", "1F2937"],
        red: ['FEE2E2', '991B1B'],
        yellow: ['FEF3C7', '92400E'],
        green: ['D1FAE5', '065F46'],
        blue: ['DBEAFE', '1E40AF'],
        indigo: ['E0E7FF', '3730A3'],
        purple: ['EDE9FE', '5B21B6'],
        pink: ['FCE7F3', '9D174D']
    }
    const style = {
        color: '#'+colors[color][1],
        backgroundColor: '#'+colors[color][0],
        borderRadius: '.2em',
        width: 'fit-content',
        padding: '.25em 1em'
    }
    if (shape === 'pill') {
        style.borderRadius = "1em"
    }
    return (
        <p style={style}>{children}</p>
    )
}