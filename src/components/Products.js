import styled from "styled-components";
import Heading from "./Heading";
import { BusinessData } from "../theme/BusinessWrapper";
import { mobile } from "../responsive";
import Product from "./Product";

const Container = styled.div`
`;

const Wrapper = styled.div`
// display: flex;
// flex-wrap: wrap;
// text-align: center;
// justify-content: space-between;
// row-gap: 30px;
margin: 0px;
// margin-right: 0px;
display: grid;
grid-template-columns: auto auto auto auto;
gap: 30px;
${mobile({gridTemplateColumns: 'auto'})}
`

const HeadingWrapper = styled.div`
text-align: center;
margin-top: 60px;
`

const Products = ({ heading = null, products }) => {

  const businessData = BusinessData()
  const businessInfo = businessData.settings


  return (
    <Container>
      {heading && <HeadingWrapper>
        <Heading text={heading} />
      </HeadingWrapper>}

      <Wrapper>
        {products.map((item) => (
          <Product item={item} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;