
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import Heading from './Heading';
import { CardFactory } from './Cards/Factory';

const SliderContainer = styled.div`
margin-top: 40px;
`

const CarouselContainer = styled.div`
`
const HeadingContainer = styled.div`
margin: 20px 0px;
`

const CardSlider = ({ id, items, heading = null, count = 3 }) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1500 },
            items: count
        },
        desktop: {
            breakpoint: { max: 1500, min: 1024 },
            items: count
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

    const cardFactory = new CardFactory(id)


    return (
        <SliderContainer className='margin-medium'>
            {heading && <HeadingContainer>
                <Heading text={heading} />
            </HeadingContainer>}
            <CarouselContainer>
                <Carousel removeArrowOnDeviceType={["superLargeDesktop", "desktop"]} infinite={true} responsive={responsive}>
                    {items.map((item) => cardFactory.init(item))}
                </Carousel></CarouselContainer>
        </SliderContainer>
    )
}

export default CardSlider