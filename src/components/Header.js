import React from 'react'
import SimpleHeader from './SimpleHeader'
import { businesses } from '../data'

const Header = () => {


    const businessInfo = businesses[0]

    return (
        <SimpleHeader
            themeColor={businessInfo.theme_color}
            announcementText={businessInfo.announcement_text}
            announcementBackground={businessInfo.announcement_background}
            logo={businessInfo.logo}
            menuItems={businessInfo.menu_items}
        />
    )
}

export default Header