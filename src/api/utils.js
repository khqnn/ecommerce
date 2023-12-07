import { businesses, categories, discountedProducts, latestProducts, popularProducts } from "../data"

export const getBusinessName = ()=>{

    return "vape"
}

export const getBusinessId = (business_name)=>{
    let businessId = null
    const business = businesses.find((b)=> b.name==business_name)

    if(business){
        businessId = business.id
    }

    return businessId
}

export const getPopularCategories = (businessId)=>{
    return categories
}

export const getPopularProducts = (businessId)=>{

    return popularProducts
}

export const getDiscountedProducts = (businessId)=>{

    return discountedProducts
}

export const getLatestProducts = (businessId)=>{

    return latestProducts
}

export const getBusinessSettings = (businessId)=>{
    const business = businesses.find(b=> b.id==businessId)
    
    return business
}