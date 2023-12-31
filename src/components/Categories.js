import styled from "styled-components";
import { mobile } from "../responsive";
import Heading from "./Heading";
import { BusinessData } from "../theme/BusinessWrapper";
import Category from "./Category";

const Container = styled.div`
`;

const HeadingContainer = styled.div`
margin: 20px 0px;
`

const Wrapper = styled.div`
display: flex;
flex: 1;
width: 100%;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection: "column" })}
`


const Categories = ({ categories, heading = null }) => {

  const businessData = BusinessData()
  const businessSettings = businessData.settings

  return (
    <Container className={businessSettings.margin}>
      {heading && <HeadingContainer>
        <Heading text={heading} />
      </HeadingContainer>}
      <Wrapper>
        {categories.map((item) => (
          <Category item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;