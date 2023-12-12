import styled from 'styled-components'
import { mobile } from '../../responsive'
import Heading from '../Heading'

const Container = styled.div``

const Wrapper = styled.div`
display: grid;
grid-template-columns: auto auto auto;
width: 100%;
display: flex;
flex-wrap: wrap;

${mobile({ gridTemplateColumns: 'auto', rowGap: '40px' })}
`
const ItemContainer = styled.div`
width: 33.33%;
${mobile({ width: '100%' })}

`

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

const Offers = () => {

    const items = [
        {
            id: 1,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/blessed-friday/480x270.jpg?$ORIGIN_JPG$',
            title: 'Galaxy S22 Ultra',
            desc: '',
            path: '/'
        },
        {
            id: 2,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/ce-tiles-adapt/Frame_480x270.jpg?$ORIGIN_JPG$',
            title: 'Global No.1 TV for 17 years',
            desc: 'Enjoy razor-sharp images, ultra-bright output and insanely crisp colors',
            path: '/'
        },
        {
            id: 3,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/ce-tiles-adapt/Freestyle_480x270.jpg?$ORIGIN_JPG$',
            title: 'The Freestyle',
            desc: 'A smart theater and portable projector that projects up to a 100-inch screen',
            path: '/'
        },
        {
            id: 4,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/SESAR_S23_Ultra_480x270.png?$ORIGIN_PNG$',
            title: 'Galaxy S23 Ultra',
            desc: '',
            path: '/'
        },
        {
            id: 5,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/ce-tiles-adapt/SEPAK_Frame_480x270-1.jpg?$ORIGIN_JPG$',
            title: 'The Frame',
            desc: 'Artwork, shows or memories. Watch what inspires you like a framed piece of art',
            path: '/'
        },
        {
            id: 6,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/B5_SEPAK_470x270-11.jpg?$ORIGIN_JPG$',
            title: 'Galaxy Z Flip5',
            desc: '',
            path: '/'
        },
        {
            id: 7,
            image: 'https://images.samsung.com/is/image/samsung/assets/pk/smartphones/socialimage/Q5_SEPAK_470x270-1.jpg?$ORIGIN_JPG$',
            title: 'Galaxy Z Fold5',
            desc: '',
            path: '/'
        }
    ]

    return (
        <Container className='margin-medium'>
            <Heading text="Our Best Offers" />
            <Wrapper>
                {items.map((item) => (
                    <ItemContainer>
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
                    </ItemContainer>
                ))}
            </Wrapper>
        </Container>
    )
}

export default Offers