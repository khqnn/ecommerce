import styled from "styled-components"
import Heading from "../../components/Heading"

const HeadingWrapper = styled.div`
display: flex;
margin-top: 40px;
margin-bottom: 10px;
margin-left: 8px;

`

export const headingBuilder = (heading) => {
    return (
        <HeadingWrapper>
            <Heading text={heading} />
        </HeadingWrapper>
    )
}