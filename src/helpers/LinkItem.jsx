import React from 'react'
import { Link } from 'react-router-dom'

const LinkItems = ({ link, item,target,setNavMenu }) => {
    const handleClick = () => {
        setNavMenu(prevNav => !prevNav)
    }
    return (
        <li><Link onClick={handleClick} to={link} target={target} >{item}</Link></li>

    )
}

export default LinkItems