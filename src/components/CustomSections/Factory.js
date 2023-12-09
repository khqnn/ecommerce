import Malenian from "./Malenian"

export class CustomSectionFactory{
    constructor(id){
        this.id = id
    }

    init(params){

        switch (this.id) {
            case "malenian":
                return <Malenian params={params} />
        
        }

        return <></>
    }
}