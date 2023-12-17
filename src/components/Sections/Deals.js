import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'

const Container = styled.div``
const Wrapper = styled.div`
display: flex;
column-gap: 20px;
${mobile({flexDirection: 'column', rowGap: '20px'})};

`
const LeftContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #f4f4f4;
border-radius: 40px;
width: 684px;
height: 684px;

${mobile({width: '100%'})};

`
const RightContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
row-gap: 20px;

`
const RowContainer = styled.div`
display: flex;
column-gap: 20px;

${mobile({width: '100%'})};

`

const RightSectionContainer = styled.div`
background-color: #f4f4f4;
border-radius: 40px;
display: flex;
align-items: center;
flex-direction: column;
width: 320px;
height: 320px;
padding-top: 10px;
row-gap: 4px;

${mobile({width: '50%', height: '160px', rowGap: '10px'})};

`

const LeftImg = styled.img`
width: 100%;
height: 100%;
border-radius: 40px;

${mobile({height: '200px'})};

`
const RightImg = styled.img`
width: 160px;
height: 160px;
${mobile({width: '100px', height: '100px'})};

`

const RightTextContainer = styled.div`
font-size: x-large;
font-weight: bold;

${mobile({fontSize: 'medium'})};

`

const RightDescContainer = styled.div`
margin: auto 20px;
display: flex;
text-align: center;
${mobile({display: 'none'})};

`


const Deals = () => {
    return (
        <Container className='margin-large'>
            <Wrapper>
                <LeftContainer>
                    <LeftImg src='https://images.samsung.com/is/image/samsung/assets/pk/home/Big-Tile-Desktop-684-by-684-17-years.jpg?$684_684_JPG$' />
                </LeftContainer>
                <RightContainer>
                    <RowContainer>
                        <RightSectionContainer>
                            <RightImg src='https://images.samsung.com/is/image/samsung/assets/pk/home/QLED-160x160.png?$160_160_PNG$' />
                            <RightTextContainer>Galaxy Z Fold5</RightTextContainer>
                            <RightDescContainer>Boost up your gaming with 4K 120H. Buy now and get Free Delivery and Installation</RightDescContainer>
                        </RightSectionContainer>
                        <RightSectionContainer>
                            <RightImg src='https://images.samsung.com/is/image/samsung/assets/pk/home/Freestyle-160x160.png?$160_160_PNG$' />
                            <RightTextContainer>Galaxy S23FE</RightTextContainer>
                            <RightDescContainer>Unexpected joy everywhere. Buy now and get FREE Battery Base</RightDescContainer>

                        </RightSectionContainer>
                    </RowContainer>
                    <RowContainer>
                        <RightSectionContainer>

                            <RightImg src='https://images.samsung.com/is/image/samsung/assets/pk/home/crystal-160x160.png?$160_160_PNG$' />
                            <RightTextContainer>Galaxy A54</RightTextContainer>
                            <RightDescContainer>Vivid crystal color. Slimmest profile. Buy now and get Free Delivery and Installation</RightDescContainer>

                        </RightSectionContainer>
                        <RightSectionContainer>

                            <RightImg src='https://images.samsung.com/is/image/samsung/assets/pk/home/160x160-301.jpg?$160_160_JPG$' />
                            <RightTextContainer>Galaxy A24</RightTextContainer>
                            <RightDescContainer>Make your own TV. Buy now and get two complimentary bezels.</RightDescContainer>


                        </RightSectionContainer>

                    </RowContainer>
                </RightContainer>
            </Wrapper>
        </Container>
    )
}

export default Deals