import { BusinessData } from '../../theme/BusinessWrapper'
import SimpleShop from './SimpleShop'

export class ShopFactory {
    constructor(id) {
        this.id = id
    }

    init(params) {

        return <SimpleShop />
    }
}