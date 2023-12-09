
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductFactory } from './Products/Factory';
import styled from 'styled-components';
import { BusinessData } from '../theme/BusinessWrapper';

const SliderContainer = styled.div`
`

const CarouselContainer = styled.div`
`

const ProductSlider = ({ heading, products }) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1500 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1500, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    const businessData = BusinessData()
    const businessInfo = businessData.settings

    const productFactory = new ProductFactory(businessInfo.product_card.id)


    return (
        <SliderContainer>
            <CarouselContainer>
                <Carousel removeArrowOnDeviceType={["superLargeDesktop", "desktop"]} infinite={true} responsive={responsive}>
                    {products.map((product) => (
                        productFactory.init(product)
                    ))}
                </Carousel></CarouselContainer>
        </SliderContainer>
    )
}

export default ProductSlider