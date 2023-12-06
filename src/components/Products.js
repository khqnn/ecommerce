import styled from "styled-components";
import { ProductFactory } from "./Products/Factory";
import { businesses } from "../data";
import Heading from "./Heading";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    text-align: center;
`;

const Products = ({heading=null, products}) => {

  const businessInfo = businesses[1]
  const productFactory = new ProductFactory(businessInfo.product_card.id)

  return (
    <Container>
      <Heading text={heading} />
      {products.map((item) => (
        productFactory.init(item)
      ))}
    </Container>
  );
};

export default Products;