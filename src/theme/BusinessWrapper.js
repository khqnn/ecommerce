import { createContext, useContext, useEffect, useState } from "react";
import { getBusinessName, getDefaultThemeSetting } from "../api/utils";
import { useNavigate } from "react-router-dom";


const BusinessContext = createContext();
export const BusinessData = () => useContext(BusinessContext);

const BusinessWrapper = ({ children }) => {

    const [business, setBusiness] = useState({ id: null, name: null, settings: {} })

    const navigate = useNavigate()

    useEffect(() => {
        /**
         * Load orignal business settings here
         * Navigate to 404 if settings not found
         */
        const name = getBusinessName()
        fetch(`${process.env.REACT_APP_API_URL}/businesses/${name}`)
            .then(response => response.json())
            .then(json => {
                const data = json.data
                const business = data.business
                const id = business.business_id
                const settings = business.settings
                setBusiness({ id, name, settings })
            })
            .catch(error => {
                navigate("/404")
            });
    }, []);

    if (business.id == null) {
        /**
         * Load and set default settings untill orignal settings are fetched
         */
        const settings = getDefaultThemeSetting()
        setBusiness({ id: settings.id, name: settings.name, settings })
    }

    return (
        <BusinessContext.Provider value={business}>
            {children}
        </BusinessContext.Provider>
    )
}

export default BusinessWrapper