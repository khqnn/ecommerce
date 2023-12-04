import SimpleHeader from "./SimpleHeader"


export class HeaderFactory {
    constructor(params) {
        this.id = params.id
        this.settings = params.settings
        this.logo = params.logo
        this.menuItems = params.menuItems
    }

    init() {
        switch (this.id) {
            case "SomeHeader":

                break;

            default:
                return <SimpleHeader settings={this.settings} logo={this.logo} menuItems={this.menuItems} />
        }
    }
}

