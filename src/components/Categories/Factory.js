import SimpleCategory from "./SimpleCategory"

export class CategoryFactory{
    constructor(id){
        this.id = id
    }

    init(item){

        switch (this.id) {
            case "simple":
                return <SimpleCategory item={item} />
        }

        return <SimpleCategory item={item} />
    }
}