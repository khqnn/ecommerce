import styled from "styled-components";
import { mobile } from "../responsive";
import { CategoryFactory } from "./Categories/Factory";
import { businesses } from "../data";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Wrapper = styled.div`
display: flex;
flex: 1;
width: 100%;
padding: 20px;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection: "column" })}
`

const Heading = styled.h1``

const Categories = ({ categories }) => {

  const businessInfo = businesses[1]
  const categoryFactory = new CategoryFactory(businessInfo.category_card.id)

  return (
    <Container>
      <Heading>POPULAR CATEGORIES</Heading>
      <Wrapper>
        {categories.map((item) => (
          categoryFactory.init(item)
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;