import { categories, defaultThemeSettings, discountedProducts, latestProducts, popularProducts, products } from "../data"

export const getDefaultThemeSetting = ()=>{
    return defaultThemeSettings
}

export const getBusinessName = ()=>{

    return "lama"
}

export const getProducts = (businessId)=>{
    return products
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
