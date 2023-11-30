import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

import { useParams } from 'react-router';
import { cart, popularProducts } from "../data";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";




const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;


const Product = () => {
  const [cartCount, setCartCount] = useState(0)
  const [variantOption, setVariantOption] = useState("")
  const [price, setPrice] = useState(0)
  const [productQuantity, setProductQuantity] = useState(1)

  const navigate = useNavigate();

  const { id } = useParams();
  const productDetails = popularProducts.find(product => product.slug == id)
  if (!productDetails) {
    navigate("/404")
    return <div>Not found</div>
  }

  const variants = productDetails.variants


  if (price == 0) {
    setPrice(productDetails.price)
  }

  if (variantOption == "" && variants.length > 0) {
    setVariantOption(variants[0].variant_option)
  }

  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
  }

  const changeVariant = (e) => {
    const variantOption = e.target.value
    const newVariant = variants.find(variant => variant.variant_option == variantOption)

    setPrice(newVariant.price)
    setVariantOption(variantOption)
  }

  const incrementProductQuantity = () => {
    setProductQuantity(productQuantity + 1)
  }

  const decrementProductQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1)
    }
  }


  return (
    <Container>
      <Navbar cartCount={cartCount} setCartCount={setCartCount} />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={productDetails.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{productDetails.name}</Title>
          <Desc>{productDetails.description}</Desc>
          <Price>$ {price}</Price>
          {productDetails.variant_option != undefined && variants?.length > 0 && <FilterContainer>
            <Filter>
              <FilterTitle>{productDetails.variant_option}</FilterTitle>
              {productDetails.variant_option == "color" && variants.map((variant) => (
                <FilterColor color={variant.variant_option} />
              ))}
              {productDetails.variant_option != "color" && <FilterSize onChange={e => changeVariant(e)} >
                {variants.map((variant) => (
                  <FilterSizeOption>{variant.variant_option}</FilterSizeOption>
                ))}
              </FilterSize>}
            </Filter>

          </FilterContainer>}
          <AddContainer>
            <AmountContainer>
              <Remove onClick={decrementProductQuantity} />
              <Amount>{productQuantity}</Amount>
              <Add onClick={incrementProductQuantity} />
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;