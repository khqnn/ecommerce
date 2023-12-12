import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div`
padding: 10px;
${mobile({padding: 0})}
`
const Wrapper = styled.div`
border: 0.01em solid black;
border-radius: 20px;
height: fit-content;

`

const ItemContainer = styled.div`
margin: 20px;

`
const ItemWrapper = styled.div`
display: flex;
flex-direction: column;
row-gap: 20px;
`
const ItemTitleContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const ItemTitle = styled.h1``
const ItemDescription = styled.div`
margin-right: 40px;
height: 100px;
font-size: 18px;
font-weight: bold;
`
const ItemIcon = styled.img`
width: 40px;
height: 40px;
`

const LinkContainer = styled.div`
`
const Link = styled.a`
text-decoration: underline;
text-underline-offset: 4px;
`


const SupportCard = ({ item }) => {
    return (
        <Container>
            <Wrapper>
                <ItemContainer>
                    <ItemWrapper>
                        <ItemTitleContainer>
                            <ItemTitle>{item.title}</ItemTitle>
                            <ItemIcon src={item.icon} />
                        </ItemTitleContainer>
                        <ItemDescription>{item.desc}</ItemDescription>
                        <LinkContainer><Link >Learn more</Link></LinkContainer>
                    </ItemWrapper>
                </ItemContainer>
            </Wrapper>
        </Container>
    )
}

export default SupportCard