import SimpleHeader from "./SimpleHeader"


export class HeaderFactory {
    constructor(id) {
        this.id = id
    }

    init(settings, logo, menuItems) {
        switch (this.id) {
            case "SomeHeader":

                break;

            default:
                return <SimpleHeader settings={settings} logo={logo} menuItems={menuItems} />
        }
    }
}

