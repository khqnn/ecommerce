
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import Product from './Product';
import Heading from './Heading';
import { BusinessData } from '../theme/BusinessWrapper';

const SliderContainer = styled.div`
margin-top: 40px;
`

const CarouselContainer = styled.div`
`
const HeadingContainer = styled.div`
margin: 20px 0px;
`

const ProductSlider = ({ products, heading = null }) => {

    const businessData = BusinessData()
    const businessSettings = businessData.settings

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1500 },
            items: 5
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


    return (
        <SliderContainer className={businessSettings.margin}>
            {heading && <HeadingContainer>
                <Heading text={heading} />
            </HeadingContainer>}
            <CarouselContainer>
                <Carousel removeArrowOnDeviceType={["superLargeDesktop", "desktop"]} infinite={true} responsive={responsive}>
                    {products.map((product) => (
                        <Product item={product} />
                    ))}
                </Carousel></CarouselContainer>
        </SliderContainer>
    )
}

export default ProductSlider