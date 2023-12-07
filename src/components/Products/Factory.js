import FencyProduct from "./FencyProduct";
import PlainProduct from "./PlainProduct";
import SimpleProduct from "./SimpleProduct"

export class ProductFactory{
    constructor(id){
        this.id = id
    }

    init(item){

        switch (this.id) {
            case "fency":
                return <FencyProduct item={item}/>
            case "plain":
                return <PlainProduct item={item}/>
        }

        return <SimpleProduct item={item} />

    }
}