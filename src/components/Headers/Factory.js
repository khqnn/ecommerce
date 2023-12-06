import SimpleHeader from "./SimpleHeader"
import StandardHeader from "./StandardHeader"


export class HeaderFactory {
    constructor(id) {
        this.id = id
    }

    init(settings, logo, menuItems) {
        switch (this.id) {
            case "standard":
                return <StandardHeader settings={settings} logo={logo} menuItems={menuItems} />
        }
        return <SimpleHeader settings={settings} logo={logo} menuItems={menuItems} />
    }
}

