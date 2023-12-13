import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import Header from '../components/Header'
import Announcement from '../components/Announcement'
import { BusinessData } from '../theme/BusinessWrapper'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
width: 100vw;
height: 100vh;
// background-color: #e8e8e8;
display: flex;
flex-direction: column;
align-items: center;
`

const Wrapper = styled.div`
display: flex;
flex-direction: row;
// width: 60%;
margin-top: 40px;
${mobile({ flexDirection: 'column', width: '100%', margin: 0 })}
`

const CheckoutDetailWrapper = styled.div`
flex: 5;
display: flex;
justify-content: end;
margin-right: 20px;
${mobile({ order: 2, margin: '0px', marginTop: '60px', justifyContent: 'center', padding: '10px' })}


`

const CheckoutSummaryWrapper = styled.div`
flex: 4;
display: flex;
justify-content: start;
// margin-top: 20px;
flex-direction: column;
height: fit-content;
margin-top: 70px;

${mobile({ order: 1, margin: '6px', justifyContent: 'center' })}

`

const FormContainer = styled.form`
flex: 1;
`;


const FormHeading = styled.div`
    font-size: x-large;
    margin-bottom: 20px;
`

const FormGroup = styled.div`
justify-content: space-between;
  margin-bottom: 10px;
`;

const HalfFormGroup = styled.div`
  margin-bottom: 20px;
  
  @media (min-width: 501px) {
    width: 48%; // Reset for larger screens
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  // font-weight: bold;
`;




const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column; // Updated for mobile

  @media (min-width: 501px) {
    flex-direction: row; // Reset for larger screens
  }
`;


const TextArea = styled.textarea`
  font-size: 16px;
  width: 100%;
`;


const RadioGroup = styled.div`
height: 20px;
`

const Button = styled.button`
  background-color: black;
  color: white;
  font-weight: 600;
  width: 100%;
  height: 60px;
`;

const SummaryContainer = styled.div`
flex: 1;
margin: 5px;
border: 0.01em solid;
// padding: 20px;
border-radius: 4px;
height: fit-content;
`

const ItemsContaienr = styled.div`
// padding: 10px;
`

const Item = styled.div`
display: flex;
flex-direction: row;
margin: 0 10px;
// margin-bottom: 20px;
// border-bottom: 0.01em dashed;
`

const ItemImage = styled.img`
flex: 1;
height: 60px;
width: 60px;
`

const ItemDetail = styled.div`
flex: 5;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 10px;
`

const ItemTitle = styled.h4`
display: flex;
align-text: center;
`
const ItemPrice = styled.div`
flex: 1;
display: flex;
justify-content: end;
align-items: center;
font-weight: bold;
`
const ItemDesc = styled.div`
font-size: 0.8em;
`


const Summary = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 10px;
`;

const SummaryHeading = styled.div`
text-align: center;
font-size: x-large;
margin-bottom: 20px;
`

const SummaryItem = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0 10px 10px 10px;
`
const SummaryItemText = styled.div`
color: ${props=> props.color};
font-weight: ${props=> props.total? 'bold': 'normal'};
font-size: ${props=> props.total? 'xx-large': 'normal'};
`
const SummaryItemPrice = styled.div`
color: ${props=> props.color};
font-weight: ${props=> props.total? 'bold': 'normal'};
font-size: ${props=> props.total? 'xx-large': 'normal'};`

const Hr = styled.hr``

const InputGroup = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
`

const InputBox = styled.div`
border: 0.01em solid black;
border-radius: 4px;
display: flex;
flex-direction: column;
padding: 1px;
`

const Input = styled.input`
  flex: ${props => props.flex ? 1 : 'none'};
  font-size: 16px;
  height: 40px;
  border: none;
  border-left: ${props => props.borderLeft ? '0.01em solid' : 'none'};
  border-right: ${props => props.borderRight ? '0.01em solid' : 'none'};
  border-top: ${props => props.borderTop ? '0.01em solid' : 'none'};
  border-bottom: ${props => props.borderBottom ? '0.01em solid' : 'none'};
  padding-left: 10px;
  `;


const RowInput = styled.div`
display: flex;
`

const Top = styled.div`
display: flex;
flex-direction: row;
// width: 60vw;
height: 120px;
${mobile({ width: '100%', flexDirection: 'column', height: 'fit-content' })}

`

const TopContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
box-shadow: 0 4px 14px rgba(0,0,0,.08);
`
const BottomContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
height: 100%;
`
const TopLeft = styled.div`
flex: 1;
display: flex;
justify-content: start;
${mobile({ justifyContent: 'center' })}

`
const TopCenter = styled.div`
flex: 1;

display: flex;
align-items: center;
justify-content: center;
${mobile({ display: 'none' })};

`
const TopRight = styled.div`
flex: 1;

display: flex;
justify-content: end;
width: 10px;
${mobile({ display: 'none' })};

`

const ImageLogo = styled.img`
  height: 100px;
`

const CenterContainer = styled.div`
// width: 100%;
display: flex;
justify-content: center;
`

const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  // padding: 10px;
  // width: 60%;
  margin-top: 60px;
  // background-color: #f0f0f0;
  ${mobile({ justifyContent: 'center', margin: 10 })}
`;

const Crumb = styled.div`
  margin-right: 5px;
  color: ${({ active }) => (active ? 'black' : 'gray')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
`;

const Separator = styled.span`
  margin: 0 5px;
  color: gray;
`;

const CouponContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 4px;
  // margin-bottom: 20px;
`;

const CouponInput = styled.input`
  padding: 8px;
  font-size: 16px;
  flex: 3;
`;

const ApplyButton = styled.button`
  flex: 1;
  padding: 8px 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

const Checkout = () => {

  const navigate = useNavigate()

  const businessData = BusinessData()
  const businessSettings = businessData.settings
  const logo = businessSettings.logo
  const announcementText = businessSettings.announcement_text
  const announcementColor = businessSettings.announcement_background


  return (
    <>
      <Announcement text={announcementText} color={announcementColor} />

      <Container>

        <TopContainer>
          <Top className='margin-large'>
            <TopLeft onClick={e => navigate("/")}><ImageLogo src={logo} /></TopLeft>
            <TopCenter><h1>CHECKOUT</h1></TopCenter>
            <TopRight><ImageLogo src='https://www.vhv.rs/file/max/11/114011_norton-secured-logo-png.png' /></TopRight>
          </Top>
        </TopContainer>
        <CenterContainer>
          <BreadcrumbContainer className='margin-large'>
            <Crumb>Home</Crumb>
            <Separator>/</Separator>
            <Crumb active>Checkout</Crumb>
          </BreadcrumbContainer>


        </CenterContainer>
        <BottomContainer >
          <Wrapper className='margin-large'>
            <CheckoutDetailWrapper>

              <FormContainer >

                <FormHeading>Shipping Details</FormHeading>

                <FormGroup>

                  <InputGroup>
                    <Label>Shipping Address</Label>

                    <InputBox>
                      <Input borderBottom placeholder='Address' />
                      <Input borderBottom placeholder='City' />

                      <RowInput>
                        <Input flex placeholder='Country' />
                        <Input borderLeft flex placeholder='Postal Code' />
                      </RowInput>
                    </InputBox>
                  </InputGroup>

                  <InputGroup>
                    <Label>Personal Info</Label>
                    <InputBox>
                      <Input placeholder='Phone Number (Optional)' />
                    </InputBox>
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <Label>Note</Label>
                  <TextArea name="note" rows="4" />
                </FormGroup>

                <FormHeading>Payment Details</FormHeading>
                <RadioGroup>
                  <input type="radio" name="cashOnDelivery" value="true" checked />
                  <label> Payment online</label>
                </RadioGroup>


                <FormGroup>

                  <InputGroup>
                    <Label>Payment Info</Label>

                    <InputBox>
                      <Input borderBottom placeholder='xxxx-xxxx-xxxx-xxxx' />

                      <RowInput>
                        <Input flex placeholder='Expiry' />
                        <Input borderLeft flex placeholder='CVV' />
                      </RowInput>
                    </InputBox>
                  </InputGroup>

                </FormGroup>


                <FormGroup>
                  <Button >PLACE ORDER</Button>
                </FormGroup>


              </FormContainer>


            </CheckoutDetailWrapper>
            <CheckoutSummaryWrapper>

              <SummaryContainer>
                <SummaryHeading>ORDER DETAILS</SummaryHeading>

                <ItemsContaienr>
                  <Item>
                    <ItemImage src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' />
                    <ItemDetail>
                      <ItemTitle>1 x Moker The Agency Theme</ItemTitle>
                      <ItemDesc></ItemDesc>
                    </ItemDetail>
                    <ItemPrice>$49.99</ItemPrice>
                  </Item>
                  <Item>
                    <ItemImage src='https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png' />
                    <ItemDetail>
                      <ItemTitle>1 x Pure Jam</ItemTitle>
                      <ItemDesc></ItemDesc>
                    </ItemDetail>
                    <ItemPrice>$49.99</ItemPrice>
                  </Item>
                  <Item>
                    <ItemImage src='https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-12.png' />
                    <ItemDetail>
                      <ItemTitle>1 x Nike Shoe</ItemTitle>
                      <ItemDesc></ItemDesc>
                    </ItemDetail>
                    <ItemPrice>$49.99</ItemPrice>
                  </Item>
                  <Item>
                    <ItemImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Glasses.png/1200px-Glasses.png' />
                    <ItemDetail>
                      <ItemTitle>2 x Grand Shirt</ItemTitle>
                      <ItemDesc></ItemDesc>
                    </ItemDetail>
                    <ItemPrice>$49.99</ItemPrice>
                  </Item>
                  <Item>
                    <ItemImage src='https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png' />
                    <ItemDetail>
                      <ItemTitle>1 x Moker The Agency Theme</ItemTitle>
                      <ItemDesc></ItemDesc>
                    </ItemDetail>
                    <ItemPrice>$49.99</ItemPrice>
                  </Item>

                </ItemsContaienr>
                {/* <Hr /> */}
              </SummaryContainer>

              <SummaryContainer>
                <SummaryHeading>CHECKOUT SUMMARY</SummaryHeading>
                <Summary>
                  <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$120</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Shipping</SummaryItemText>
                    <SummaryItemPrice>$5</SummaryItemPrice>
                  </SummaryItem>
                  <Hr />

                  <SummaryItem>
                    <SummaryItemText>Applicable taxes and fee will be calculated before finalizing checkout</SummaryItemText>
                  </SummaryItem>
                  <Hr />
                  <SummaryItem>
                    <SummaryItemText color='green' total>Total</SummaryItemText>
                    <SummaryItemPrice color='green' total>$125</SummaryItemPrice>
                  </SummaryItem>

                </Summary>
              </SummaryContainer>

              <CouponContainer>
                <CouponInput
                  type="text"
                  placeholder="Enter coupon code"
                />
                <ApplyButton>Apply</ApplyButton>
              </CouponContainer>
            </CheckoutSummaryWrapper>
          </Wrapper>
        </BottomContainer>
      </Container>
    </>
  )
}

export default Checkout