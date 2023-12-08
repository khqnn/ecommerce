import React, { useEffect } from 'react'

const CustomSection = ({id, html}) => {

    useEffect(() => {
        document.getElementById(id).innerHTML = html
    }, [])

    return (
        <div id={id}></div>
    )
}

export default CustomSection