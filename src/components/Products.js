import styled from "styled-components";
import { ProductFactory } from "./Products/Factory";
import Heading from "./Heading";
import { BusinessData } from "../theme/BusinessWrapper";

const Container = styled.div`
`;

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
text-align: center;
justify-content: space-between;
row-gap: 30px;
margin: 20px;
margin-right: 0px;
// display: grid;
// grid-template-columns: auto auto auto auto;
// gap: 30px;

`

const HeadingWrapper = styled.div`
text-align: center;
margin-top: 60px;
`

const Products = ({ heading = null, products }) => {

  const businessData = BusinessData()
  const businessInfo = businessData.settings

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