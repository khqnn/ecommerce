import styled from "styled-components";
import { getPopularCategories } from "../../api/utils";
import Categories from "../../components/Categories"
import { headingBuilder } from "./HeadingBuilder";
import { SliderFactory } from "../../components/Sliders/Factory";

const Wrapper = styled.div`
margin-bottom: 40px;
`

export const sliderBuilder = (businessData, section) => {

    const sliderFactory = new SliderFactory(section.id)

    return (
        <Wrapper>
            {section.heading && headingBuilder(section.heading)}
            {sliderFactory.init(section)}
        </Wrapper>
    )

}