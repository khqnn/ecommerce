import styled from "styled-components";
import { getDiscountedProducts, getLatestProducts, getPopularProducts } from "../../api/utils";
import ProductSlider from "../../components/ProductSlider";
import { headingBuilder } from "./HeadingBuilder";

const Wrapper = styled.div`
margin-bottom: 100px;
`


export const productSliderBuilder = (businessData, section) => {
    const businessId = businessData.id

    let products = []
    switch (section.params.special) {
        case "popular_products":
            products = getPopularProducts(businessId)
            break;
        case "discounted_products":
            products = getDiscountedProducts(businessId)
            break;
        case "latest_products":
            products = getLatestProducts(businessId)
            break;
    }

    return (
        <Wrapper>
            {headingBuilder(section.heading)}
            <div className="margin-medium"><ProductSlider products={products} /></div>
        </Wrapper>
    )

}