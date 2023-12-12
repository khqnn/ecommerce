import styled from 'styled-components'
import { mobile } from '../../responsive'


const ItemWrapper = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
row-gap: 40px;
${mobile({ padding: 0 })}

`

const ImageWrapper = styled.div`
`

const TextWrapper = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: auto 80px;
row-gap: 20px;
height: 100px;
`

const ItemImage = styled.img`
width: 100%;
border-radius: 20px;
`
const ItemTitle = styled.h2``
const ItemDesc = styled.p`
height: 80px;
display: flex;
align-items: center;
${mobile({ height: 'auto' })}

`
const ItemBtn = styled.button`
border-radius: 40px;
padding: 12px 28px;
font-size: 14px;
color: white;
background-color: black;
text-decoration: none;
border: none;
font-weight: 600;
`


const OfferCard = ({item}) => {
    return (
        <>
            <ItemWrapper>
                <ImageWrapper>
                    <ItemImage src={item.image} />
                </ImageWrapper>
                <TextWrapper>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemDesc>{item.desc}</ItemDesc>
                    <ItemBtn>Buy Now</ItemBtn>
                </TextWrapper>
            </ItemWrapper>
        </>
    )
}

export default OfferCard