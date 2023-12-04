import styled from "styled-components";
import { ProductFactory } from "./Products/Factory";
import { businesses } from "../data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({products}) => {

  const businessInfo = businesses[1]
  const productFactory = new ProductFactory(businessInfo.product_card.id)

  return (
    <Container>
      {products.map((item) => (
        productFactory.init(item)
      ))}
    </Container>
  );
};

export default Products;