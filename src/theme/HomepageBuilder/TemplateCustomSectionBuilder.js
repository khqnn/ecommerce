import styled from "styled-components";
import { getPopularCategories } from "../../api/utils";
import Categories from "../../components/Categories"
import { headingBuilder } from "./HeadingBuilder";
import { CustomSectionFactory } from "../../components/CustomSections/Factory";

const Wrapper = styled.div`
margin-bottom: 100px;
`

export const templateCustomSectionBuilder = (businessData, section) => {

    const customSectionFactory = new CustomSectionFactory(section.id)
    
    return (
        <Wrapper>
            {headingBuilder(section.heading)}
            {customSectionFactory.init(section.settings)}
        </Wrapper>
    )

}