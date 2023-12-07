import styled from "styled-components";
import { ProductFactory } from "./Products/Factory";
import { businesses } from "../data";
import Heading from "./Heading";

const Container = styled.div`
`;

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
text-align: center;
justify-content: space-between;
margin: 0px 20px;
row-gap: 30px
`

const HeadingWrapper = styled.div`
text-align: center;
margin-top: 60px;
`

const Products = ({ heading = null, products }) => {

  const businessInfo = businesses[1]
  const productFactory = new ProductFactory(businessInfo.product_card.id)

  return (
    <Container>
      {heading && <HeadingWrapper>
        <Heading text={heading} />
      </HeadingWrapper>}

      <Wrapper>
        {products.map((item) => (
          productFactory.init(item)
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;