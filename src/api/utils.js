import { categories, defaultThemeSettings, discountedProducts, latestProducts, popularProducts, products } from "../data"

export const getDefaultThemeSetting = () => {
    return defaultThemeSettings
}

export const getBusinessName = (window) => {
    const host = window.location.host;
    const parts = host.split(".");
    let subdomain = "store";
    if (parts.length >= 3) {
        subdomain = parts[0];
    }

    return subdomain
}

export const getProducts = (businessId) => {
    return products
}

export const getPopularCategories = (businessId) => {
    return categories
}

export const getPopularProducts = (businessId) => {

    return popularProducts
}

export const getDiscountedProducts = (businessId) => {

    return discountedProducts
}

export const getLatestProducts = (businessId) => {

    return latestProducts
}
