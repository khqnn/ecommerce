import FencyProduct from "./FencyProduct";
import SimpleProduct from "./SimpleProduct"

export class ProductFactory{
    constructor(id){
        this.id = id
    }

    init(item){
        console.log('fency....', this.id);

        switch (this.id) {
            case "fency":
                return <FencyProduct item={item}/>
        }

        return <SimpleProduct item={item} />

    }
}