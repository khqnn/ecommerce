import styled from "styled-components";
import { mobile } from "../responsive";
import { CategoryFactory } from "./Categories/Factory";
import { businesses } from "../data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Categories = ({categories}) => {

  const businessInfo = businesses[1]
  const categoryFactory = new CategoryFactory(businessInfo.category_card.id)

  return (
    <Container>
      {categories.map((item) => (
        categoryFactory.init(item)
      ))}
    </Container>
  );
};

export default Categories;