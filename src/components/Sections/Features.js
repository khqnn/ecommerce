import styled from "styled-components"
import { mobile } from "../../responsive"

const Container = styled.div`
margin: 0px auto;
box-shadow: 0 4px 14px rgba(0,0,0,.08);
${mobile({boxShadow: 'none'})};
`
const Wrapper = styled.div`
display: flex;
height: fit-content;
padding: 20px 0px;
${mobile({flexDirection: 'column', rowGap: '40px'})};
`
const ItemContainer = styled.div`
flex: 1;
display: flex;
${mobile({columnGap: '20px'})};

`

const ImageContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
`

const Image = styled.img`
width: 100px;
height: 100px;
margin-left: 20px;
${mobile({margin: '0px'})};

`

const TextContainer = styled.div`
flex: 4;
display: flex;
flex-direction: column;
justify-content: center;
row-gap: 10px;
height: 100%;
margin: 0px 20px;
${mobile({margin: '0px'})};

`



const Features = () => {


    const items = [
        {
            "id": 1,
            "icon": "https://cdn-icons-png.flaticon.com/512/6831/6831000.png",
            "title": "Free Shipping",
            "description": "Enjoy free shipping on all orders. We deliver your favorite products to your doorstep without any extra cost."
        },
        {
            "id": 2,
            "icon": "https://cdn-icons-png.flaticon.com/512/10055/10055529.png",
            "title": "90 Days Return",
            "description": "Not satisfied with your purchase? No worries. Return it within 90 days for a full refund or exchange."
        },
        {
            "id": 3,
            "icon": "https://cdn-icons-png.flaticon.com/512/6993/6993594.png",
            "title": "Secure Payment",
            "description": "Your payment is secure with us. We use advanced encryption technology to ensure a safe and worry-free shopping experience."
        },
        {
            "id": 4,
            "icon": "https://www.svgrepo.com/show/105027/24-hours-support.svg",
            "title": "24/7 Online Support",
            "description": "Need assistance? Our customer support team is available 24/7 to help you with any inquiries or issues."
        }
    ]

    return (
        <Container className="margin-medium">
            <Wrapper>
                {items.map((item) => (

                    <ItemContainer>
                        <ImageContainer><Image src={item.icon} /> </ImageContainer>
                        <TextContainer>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </TextContainer>
                    </ItemContainer>
                ))}

            </Wrapper>
        </Container>
    )
}

export default Features