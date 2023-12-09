import styled from "styled-components"
import Heading from "../../components/Heading"

const HeadingWrapper = styled.div`
display: flex;
margin-top: 40px;
margin-bottom: 10px;

`

export const headingBuilder = (heading) => {
    return (
        <HeadingWrapper className="margin-medium">
            <Heading text={heading} />
        </HeadingWrapper>
    )
}