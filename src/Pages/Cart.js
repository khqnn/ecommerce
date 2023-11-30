import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;

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

const Cart = () => {

  const [cartObject, setCartObject] = useState(cart)

  const navigate = useNavigate()

  const calculateCart = (cartItems) => {
    const tempCart = Object.assign({}, cart)
    tempCart.line_items[0].quantity = cartItems[0].quantity
    tempCart.cart_summary.grand_total = 123
    return tempCart
  }

  const updateItemQuantity = (line_item, action = "increment") => {

    const cartItem = cartItems.find(item => item.product_id == line_item.product.id && item.variant_option == line_item.variant.variant_option)
    if (action == "increment") {
      cartItem.quantity += 1

    }
    else if (action == "decrement" && cartItem.quantity > 1) {
      cartItem.quantity -= 1

    }
    else {
      return
    }

    const tempCart = calculateCart(cartItems)
    setCartObject(tempCart)

  }

  const checkout = () => {
    navigate("/checkout")
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({cartObject.total_unique_items})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cartObject.line_items != undefined && cartObject.line_items.length > 0 && cartObject.line_items.map((line_item) => (
              <Product>
                <ProductDetail>
                  <Image src={line_item.variant.image} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {line_item.product.name}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {line_item.product.id}
                    </ProductId>
                    {/* <ProductColor color="black" /> */}
                    <ProductSize>
                      <b>{line_item.product.variant_option}:</b> {line_item.variant.variant_option}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add onClick={e => updateItemQuantity(line_item, "increment")} />
                    <ProductAmount>{line_item.quantity}</ProductAmount>
                    <Remove onClick={e => updateItemQuantity(line_item, "decrement")} />
                  </ProductAmountContainer>
                  <ProductPrice>$ {line_item.grand_total}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}

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
            <Button onClick={checkout}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Hr/>
      <Footer />
    </Container>
  );
};

export default Cart;