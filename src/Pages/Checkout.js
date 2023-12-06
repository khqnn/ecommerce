import styled from 'styled-components'
import { mobile } from '../responsive'
import Header from '../components/Header'
import Announcement from '../components/Headers/SimpleHeader/Announcement'
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
width: 60%;
margin-top: 60px;
${mobile({ flexDirection: 'column', width: '100%' })}
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
margin-top: 60px;
flex-direction: column;
height: fit-content;
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
height: 50px;
`

const Button = styled.button`
  background-color: black;
  color: white;
  font-weight: 600;
  width: 100%;
`;

const SummaryContainer = styled.div`
flex: 1;
margin: 5px;
border: 0.01em solid;
padding: 20px;
border-radius: 4px;
height: fit-content;
background-color: white;
`

const ItemsContaienr = styled.div`
`

const Item = styled.div`
display: flex;
flex: direction: row;
margin-bottom: 20px;
`

const ItemDetail = styled.div`
flex: 5;
display: flex;
flex-direction: column;
`

const ItemTitle = styled.h4`
display: flex;
align-text: center;
`
const ItemPrice = styled.div`
flex: 1;
display: flex;
justify-content: end;
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

const SummaryItem = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`
const SummaryItemText = styled.div``
const SummaryItemPrice = styled.div``

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
width: 60vw;
height: 120px;
${mobile({ width: '100%', flexDirection: 'column', height: 'fit-content' })}

`

const TopContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
const BottomContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: #ebebeb;
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

const Checkout = () => {

  const navigate = useNavigate()

  const businessData = BusinessData()
  const businessSettings = businessData.settings
  const logo = businessSettings.logo
  const announcementText = businessSettings.header.settings.announcement_text
  const announcementColor = businessSettings.header.settings.announcement_background


  return (
    <>
      <Announcement text={announcementText} color={announcementColor} />

      <Container>

        <TopContainer>
          <Top>
            <TopLeft onClick={e => navigate("/")}><ImageLogo src={logo} /></TopLeft>
            <TopCenter><h1>CHECKOUT</h1></TopCenter>
            <TopRight><ImageLogo src='https://www.vhv.rs/file/max/11/114011_norton-secured-logo-png.png' /></TopRight>
          </Top>
        </TopContainer>
        <BottomContainer>
          <Wrapper>
            <CheckoutDetailWrapper>

              <FormContainer >
                {/* <FormHeading>Shipping Details</FormHeading> */}
                {/* <div>Checkout</div> */}

                {/* <FormGroup>
                <Label>Address</Label>
                <Input type="text" name="address" required />
              </FormGroup>

              <FlexContainer>
                <HalfFormGroup>
                  <Label>City</Label>
                  <Input type="text" name="city" required />
                </HalfFormGroup>

                <HalfFormGroup>
                  <Label>Province</Label>
                  <Input type="text" name="province" required />
                </HalfFormGroup>
              </FlexContainer>

              <FlexContainer>
                <HalfFormGroup>
                  <Label>Country</Label>
                  <Input type="text" name="country" required />
                </HalfFormGroup>

                <HalfFormGroup>
                  <Label>Postal Code</Label>
                  <Input type="text" name="postalCode" required />
                </HalfFormGroup>
              </FlexContainer> */}

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
                      <Input placeholder='Phone Number (Optional)'/>
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
                  <label> Payment on Delivery</label>
                </RadioGroup>


                <FormGroup>
                  <Button >PLACE ORDER</Button>
                </FormGroup>


              </FormContainer>


            </CheckoutDetailWrapper>
            <CheckoutSummaryWrapper>

              <SummaryContainer>
                <ItemsContaienr>
                  <Item>
                    <ItemDetail>

                      <ItemTitle>1 x Moker The Agency Theme</ItemTitle>
                      <ItemDesc>Amazing UI Kit pack perfect for your next Project</ItemDesc>
                    </ItemDetail>
                    <ItemPrice>$49.99</ItemPrice>
                  </Item>
                  <Item>
                    <ItemDetail>

                      <ItemTitle>1 x Pure Jam</ItemTitle>
                      <ItemDesc>Amazing UI Kit pack perfect for your next Project</ItemDesc>
                    </ItemDetail>
                    <ItemPrice>$49.99</ItemPrice>
                  </Item>
                  <Item>
                    <ItemDetail>

                      <ItemTitle>1 x Nike Shoe</ItemTitle>
                      <ItemDesc>Amazing UI Kit pack perfect for your next Project</ItemDesc>
                    </ItemDetail>
                    <ItemPrice>$49.99</ItemPrice>
                  </Item>
                  <Item>
                    <ItemDetail>

                      <ItemTitle>2 x Grand Shirt</ItemTitle>
                      <ItemDesc>Amazing UI Kit pack perfect for your next Project</ItemDesc>
                    </ItemDetail>
                    <ItemPrice>$49.99</ItemPrice>
                  </Item>
                  <Item>
                    <ItemDetail>

                      <ItemTitle>1 x Moker The Agency Theme</ItemTitle>
                      <ItemDesc>Amazing UI Kit pack perfect for your next Project</ItemDesc>
                    </ItemDetail>
                    <ItemPrice>$49.99</ItemPrice>
                  </Item>

                </ItemsContaienr>
                {/* <Hr /> */}
              </SummaryContainer>
              <SummaryContainer>

                <Summary>
                  <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$120</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Discount</SummaryItemText>
                    <SummaryItemPrice>$5</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Tax</SummaryItemText>
                    <SummaryItemPrice>$12</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Grand Total</SummaryItemText>
                    <SummaryItemPrice>$127</SummaryItemPrice>
                  </SummaryItem>

                </Summary>
              </SummaryContainer>
            </CheckoutSummaryWrapper>
          </Wrapper>
        </BottomContainer>
      </Container>
    </>
  )
}

export default Checkout