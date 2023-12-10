import StandardSlider from "./StandardSlider";

export class SliderFactory{
    constructor(id){
        this.id = id
    }

    init(params){

        switch (this.id) {
            case "standard":
                return <StandardSlider params={params} />
        
        }

        return <></>
    }
}