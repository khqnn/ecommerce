import { createContext, useContext, useState } from "react";
import { getBusinessId, getBusinessName, getBusinessSettings } from "../api/utils";


const BusinessContext = createContext();
export const BusinessData = () => useContext(BusinessContext);

const BusinessWrapper = ({ children }) => {

    const [business, setBusiness] = useState({id: null, name: null, settings: {}})

    if(business.id==null){
        const name = getBusinessName()
        const id = getBusinessId(name)
        const settings = getBusinessSettings(id)
        setBusiness({id, name, settings})
    }

    return (
        <BusinessContext.Provider value={business}>
            {children}
        </BusinessContext.Provider>
    )
}

export default BusinessWrapper