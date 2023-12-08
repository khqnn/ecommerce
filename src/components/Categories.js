import styled from "styled-components";
import { mobile } from "../responsive";
import { CategoryFactory } from "./Categories/Factory";
import Heading from "./Heading";
import { BusinessData } from "../theme/BusinessWrapper";

const Container = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`;

const Wrapper = styled.div`
display: flex;
flex: 1;
width: 100%;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection: "column" })}
`


const Categories = ({categories, heading = null }) => {

  
  const businessData = BusinessData()
  const businessInfo = businessData.settings
  const categoryFactory = new CategoryFactory(businessInfo.category_card.id)

  return (
    <Container>
      <Heading text={heading} />
      <Wrapper>
        {categories.map((item) => (
          categoryFactory.init(item)
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;