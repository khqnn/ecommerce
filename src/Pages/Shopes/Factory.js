import { BusinessData } from '../../theme/BusinessWrapper'
import SimpleShop from './SimpleShop'
import StandardShop from './StandardShop'

export class ShopFactory {
    constructor(id) {
        this.id = id
    }

    init(params) {

        switch (this.id) {
            case 'standard':
                return <StandardShop />

        }

        return <SimpleShop />
    }
}