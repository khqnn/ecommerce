import styled from "styled-components";
import { mobile } from "../responsive";
import Heading from "./Heading";
import { BusinessData } from "../theme/BusinessWrapper";
import Category from "./Category";

const Container = styled.div`

`;

const Wrapper = styled.div`
display: flex;
flex: 1;
width: 100%;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection: "column" })}
`


const Categories = ({ categories, heading = null }) => {


  return (
    <Container>
      <Heading text={heading} />
      <Wrapper>
        {categories.map((item) => (
          <Category item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;