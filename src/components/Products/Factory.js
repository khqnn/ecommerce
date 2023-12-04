import FencyProduct from "./FencyProduct";
import SimpleProduct from "./SimpleProduct"

export class ProductFactory{
    constructor(id){
        this.id = id
    }

    init(item){

        switch (this.id) {
            case "fency":
                return <FencyProduct item={item}/>
        }

        return <SimpleProduct item={item} />

    }
}