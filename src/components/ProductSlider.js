
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { businesses, popularProducts } from '../data';
import { ProductFactory } from './Products/Factory';
import styled from 'styled-components';
import Heading from './Heading';

const SliderContainer = styled.div`
margin: 3px;
`

const HeadingContainer = styled.div`
margin-top: 40px;
margin-bottom: 10px;
text-align: center;
`



const CarouselContainer = styled.div`
`

const ProductSlider = ({heading, products}) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const businessInfo = businesses[1]
    const productFactory = new ProductFactory(businessInfo.product_card.id)


    return (
        <SliderContainer>
            <HeadingContainer>
                <Heading text={heading} />
            </HeadingContainer>
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