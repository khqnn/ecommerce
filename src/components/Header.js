import { BusinessData } from '../theme/BusinessWrapper'
import Announcement from './Announcement'
import Naivbar from './Naivbar'

const Header = () => {

    const businessData = BusinessData()
    const businessSettings = businessData.settings

    const announcement_background = businessSettings.announcement_background
    const announcement_text = businessSettings.announcement_text


    const logo = businessSettings.logo
    const menuItems = businessSettings.menu_items
    const settings = businessSettings.header
    settings['margin'] = businessSettings.margin

    return (
        <>
            <Naivbar logo={logo} settings={settings} menuItems={menuItems} />
            <Announcement text={announcement_text} color={announcement_background} />

        </>
    )
}

export default Header