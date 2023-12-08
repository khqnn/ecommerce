import styled from "styled-components"
import CustomSection from "../../components/CustomSection"
import Heading from "../../components/Heading"
import { headingBuilder } from "./HeadingBuilder"

const Container = styled.div``
const Wrapper = styled.div``

export const customSectionBuilder = (section) => {
    const name = section.name + "-" + Date.now().toString()
    const html = atob(section.html)
    return (
        <Container>
            <Wrapper>
                {headingBuilder(section.heading)}
                <CustomSection id={name} html={html} />
            </Wrapper>
        </Container>
    )


}