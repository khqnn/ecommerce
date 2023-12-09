import styled from "styled-components";
import { getPopularCategories } from "../../api/utils";
import Categories from "../../components/Categories"
import { headingBuilder } from "./HeadingBuilder";

const Wrapper = styled.div`
margin-bottom: 100px;
`

export const categorySliderBuilder = (businessData, section) => {

    let categories = []
    switch (section.params.special) {
        case "popular_categories":
            categories = getPopularCategories(businessData.id)
            break;
    }

    return (
        <Wrapper>
            {headingBuilder(section.heading)}
            <div className="margin-medium">< Categories categories={categories} /></div>
        </Wrapper>
    )

}