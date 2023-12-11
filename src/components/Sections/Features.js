import styled from "styled-components"

const Container = styled.div`
margin-top: 100px;
margin-bottom: 100px;
box-shadow: 0 4px 14px rgba(0,0,0,.08);
`
const Wrapper = styled.div`
display: flex;
height: 200px;
`
const ItemContainer = styled.div`
flex: 1;
display: flex;
column-gap: 20px;
`

const ImageContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
`

const Image = styled.img`
width: 100px;
height: 100px;
margin: 0px 20px;
`

const TextContainer = styled.div`
flex: 4;
display: flex;
flex-direction: column;
justify-content: center;
row-gap: 10px;
height: 100%;
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