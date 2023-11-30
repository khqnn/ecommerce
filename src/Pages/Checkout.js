import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { cart, cartItems } from "../data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ flexDirection: "row" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row; // Updated for mobile
  ${mobile({ flexDirection: 'column' })}
  
`;

const Info = styled.div`
  flex: 3;
  margin: 10px;
  ${mobile({ order: 2 })} // Updated order for mobile
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;
  margin: 10px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const FormContainer = styled.form`
`;

const FormGroup = styled.div`
width: 100%;
justify-content: space-between;
  margin-bottom: 10px;
`;


const HalfFormGroup = styled.div`
  width: 100%; // Updated for mobile
  margin-bottom: 20px;
  
  @media (min-width: 501px) {
    width: 45%; // Reset for larger screens
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  height: 30px;
`;


const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-direction: column; // Updated for mobile

  @media (min-width: 501px) {
    flex-direction: row; // Reset for larger screens
  }
`;


const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

const FormHeading = styled.div`
    font-size: x-large;
    margin-bottom: 20px;
`

const RadioGroup = styled.div`
height: 50px;
`

const BorderedContainer = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  padding-right: 40px;

  margin-bottom: 20px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Checkout = () => {

    const [cartObject, setCartObject] = useState(cart)

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    }

    const navigateToPage = (page) => {
        navigate(page)
    }


    return (
        <Container>
            <Wrapper>
                <Title>CHECKOUT</Title>
                <Top>
                    <TopButton>VIEW CART</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag({cartObject.total_unique_items})</TopText>
                    </TopTexts>
                    <TopButton type="filled">PLACE ORDER</TopButton>
                </Top>
                <Bottom>
                    <Info>

                        <FormContainer onSubmit={handleSubmit}>
                            <BorderedContainer>
                                <FormHeading>Shipping Details</FormHeading>

                                <FormGroup>
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
                                </FlexContainer>

                                <FormGroup>
                                    <Label>Note</Label>
                                    <TextArea name="note" rows="4" />
                                </FormGroup>
                            </BorderedContainer>

                            <BorderedContainer>
                                <FormHeading>Payment Details</FormHeading>
                                <RadioGroup>
                                    <input type="radio" name="cashOnDelivery" value="true" checked />
                                    <label> Payment on Delivery</label>
                                </RadioGroup>

                            </BorderedContainer>

                            <FlexContainer>
                                {/* <HalfFormGroup>

                                </HalfFormGroup>
                                <HalfFormGroup> */}
                                <FormGroup>
                                    <Button >PLACE ORDER</Button>
                                </FormGroup>
                                {/* </HalfFormGroup> */}
                            </FlexContainer>


                        </FormContainer>

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cartObject.cart_summary.subtotal}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemPrice>$ -{cartObject.cart_summary.discount_amount}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Tax</SummaryItemText>
                            <SummaryItemPrice>$ {cartObject.cart_summary.tax_amount}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cartObject.cart_summary.grand_total}</SummaryItemPrice>
                        </SummaryItem>
                        {/* <Button onClick={e=> navigateToPage("/thankyou")}>PLACE ORDER</Button> */}

                    </Summary>
                </Bottom>
            </Wrapper>
            <Hr />
            <Footer />
        </Container>
    );
};

export default Checkout;