import { businesses } from '../data'
import { HeaderFactory } from './Headers/Factory'

const Header = () => {


    const businessInfo = businesses[1]
    const logo = businessInfo.logo
    const menuItems = businessInfo.menu_items
    const id = businessInfo.header.id
    const settings = businessInfo.header.settings

    return (new HeaderFactory(id)).init(settings, logo, menuItems)
}

export default Header