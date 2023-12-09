import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../../responsive'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined, FavoriteBorder } from "@material-ui/icons";


const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        color: props => props.textColor,
        backgroundColor: props => props.backgroundColor,
    }
})

const Container = styled.div`
background-color: #f6f6f6;
border-radius: 20px;
position: relative;

width: 300px;
height: 360px;
${mobile({width: 'calc(100vw - 40px)', margin: '0px'})}
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;

`
const ImageContainer = styled.div`
flex: 4;
display: flex;
width: 100%;
height: 100%;

justify-content: center;
align-items: center;
`

const Image = styled.img`
width: 220px;
height: 220px;
`

const NameContainer = styled.div`
flex: 1;
display: flex;

justify-content: center;
align-items: center;
font-weight: bold;
font-size: large;

`
const PriceContainer = styled.div`
width: 100%;
height: fit-content;
flex: 1;
display: flex;
flex-direction: row;
justify-content: center;
text-align: center;
align-items: center;
margin-bottom: 10px;
`
const WishlistWrapper = styled.div`
flex: 1;
`
const PriceWrapper = styled.div`
flex: 2;
font-weight: bold;
font-size: large;
`
const AddtocartWrapper = styled.div`
flex: 1;
`


const PlainProduct = ({ item }) => {
    return (
        <Container>
            <Wrapper>
                <ImageContainer><Image src={item.image} /></ImageContainer>
                <NameContainer>{item.name}</NameContainer>
                <PriceContainer>
                    <WishlistWrapper>

                        <StyledBadge color="primary" >
                            <FavoriteBorder />
                        </StyledBadge>
                    </WishlistWrapper>
                    <PriceWrapper>$2.3</PriceWrapper>
                    <AddtocartWrapper>

                        <StyledBadge color="primary" >
                            <ShoppingCartOutlined />
                        </StyledBadge>
                    </AddtocartWrapper>
                </PriceContainer>
            </Wrapper>
        </Container>
    )
}

export default PlainProduct