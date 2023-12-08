import styled from "styled-components"
import Heading from "../../components/Heading"

const HeadingWrapper = styled.div`
display: flex;
text-align: center;
margin-top: 40px;
margin-bottom: 40px;

`

export const headingBuilder = (heading) => {
    return (
        <HeadingWrapper>
            <Heading text={heading} />
        </HeadingWrapper>
    )
}