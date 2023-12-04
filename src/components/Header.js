import { businesses } from '../data'
import { BusinessData } from '../theme/BusinessWrapper'
import { HeaderFactory } from './Headers/Factory'

const Header = () => {

    const businessData = BusinessData()
    const businessId = businessData.id
    const businessSettings = businessData.settings


    const logo = businessSettings.logo
    const menuItems = businessSettings.menu_items
    const id = businessSettings.header.id
    const settings = businessSettings.header.settings

    return (new HeaderFactory(id)).init(settings, logo, menuItems)
}

export default Header