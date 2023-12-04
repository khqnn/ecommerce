import React from 'react'
import { businesses } from '../data'
import SimpleHeader from "./Headers/SimpleHeader"
import { HeaderFactory } from './Headers/Factory'

const Header = () => {


    const businessInfo = businesses[1]
    const logo = businessInfo.logo
    const menuItems = businessInfo.menu_items
    const id = businessInfo.header.id
    const settings = businessInfo.header.settings

    return (new HeaderFactory({id, settings, logo, menuItems})).init()
}

export default Header