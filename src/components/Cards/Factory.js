import ImageCard from "./ImageCard";
import OfferCard from "./OfferCard";
import SupportCard from "./SupportCard";

export class CardFactory {
    constructor(id) {
        this.id = id
    }

    init(item) {

        switch (this.id) {
            case 'offer':
                return <OfferCard item={item} />
            case 'support':
                return <SupportCard item={item} />
            case 'image':
                return <ImageCard item={item} />
            default:
                return <></>
        }

    }
}