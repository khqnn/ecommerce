import styled from "styled-components";
import Products from "../../../components/Products";
import Newsletter from "../../../components/Newsletter";
import Footer from "../../../components/Footer";
import { mobile } from "../../../responsive";
import { useParams } from 'react-router';
import { categories, popularProducts } from "../../../data";
import { useState } from "react";
import Header from "../../../components/Header";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const SimpleShop = () => {

  const [products, setProducts] = useState(null)

  const { id } = useParams();

  /**
   * Query category details using category slug
   */

  const categoryDetails = categories.find(cat => cat.slug === id)
  const categoryName = categoryDetails.title
  const productFilters = categoryDetails.filters

  /**
   * Query to get products for the category
   */

  if (!products) {
    setProducts(popularProducts)
    // setProducts([popularProducts[0]])
    
  }

  /**
   * Based on selected filters fetch products and render
   */
  const handleChangeFilter = (event)=>{

    setProducts([popularProducts[0], popularProducts[1], popularProducts[2]])
  }

  return (
    <>
    
      <Header/>

      <Container>

        <Title>{categoryName}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            {productFilters !== undefined && productFilters.length > 0 && productFilters.map((productFilter) => (
              <Select  onChange={e=> handleChangeFilter(e)}>
                <Option disabled selected>
                  {productFilter.name}
                </Option>
                {productFilter.options.map((option) => (
                  <Option>{option}</Option>
                ))}
              </Select>
            ))}
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>

        <Products products={products} />
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default SimpleShop;