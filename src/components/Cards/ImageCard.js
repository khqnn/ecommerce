import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
width: 100%;
`
const Wrapper = styled.div`
margin: 20px;
display: flex;
flex-direction: column;
align-items: center;
${mobile({ margin: 0 })}
`
const ImageContainer = styled.div``
const InnerContainer = styled.div`
position: absolute;
margin: 40px;
display: flex;
flex-direction: column;
align-items: center;
row-gap: 40px;

`
const InnerWrapper = styled.h1`
text-align: center;
`

const InnerBtn = styled.button`
border-radius: 40px;
padding: 12px 28px;
font-size: 14px;
color: black;
background-color: white;
text-decoration: none;
border: none;
font-weight: 600;
`
const Image = styled.img`
width: 100%;

`

const ImageCard = ({ item }) => {
    console.log(item.image);
    return (
        <Container>
            <Wrapper>
                <InnerContainer>
                    <InnerWrapper>{item.title}</InnerWrapper>
                    <InnerBtn>Learn More</InnerBtn>
                </InnerContainer>
                <ImageContainer><Image src={item.image} /></ImageContainer>
            </Wrapper>
        </Container>
    )
}

export default ImageCard