import styled from "styled-components"
import Header from "../../../components/Header"
import Products from "../../../components/Products"
import { BusinessData } from "../../../theme/BusinessWrapper"
import { getPopularProducts } from "../../../api/utils"
import Footer from "../../../components/Footer"


const Container = styled.div`
width: 100%;
height: 100%;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
`
const Top = styled.div`
height: 100px;
background-color: white;
display: flex;
flex-direction: row;
`

const BreadcrumbContaienr = styled.div`
flex: 1;
display: flex;
align-items: center;
`

const Breadcrumb = styled.div`
margin-left: 40px;
`

const SearchContaienr = styled.div`
flex: 4;
display: flex;
align-items: center;
`

const SearchBox = styled.div`
width: 100%;
height: 100%;
`

const Search = styled.input`
width: 100%;
height: 100%;
font-size: xxx-large;
font-weight: bold;
border: none;
`

const Bottom = styled.div`
height: 100%;
display: flex;
flex-direction: row;
border: 0.01em solid gray;
`

const SidebarContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
border-right: 0.01em solid gray;
`
const ProductsContainer = styled.div`
flex: 4;
`

const SortFiltersContainer = styled.div`
padding: 20px 40px;
background-color: white;
border-bottom: 0.01em solid gray;
`
const SortSelect = styled.select`
width: 100%;
border: none;
`

const SortOption = styled.option`
`

const FilterTitle = styled.h2`
margin-bottom: 15px;

`

const FiltersContainer = styled.div`
height: 100vh;
padding-left: 40px;
padding-top: 20px;
height: 100vh;
background-color: white;
`

const FilterGroup = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
`

const FilterHeading = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
`;

const FilterList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FilterItem = styled.li`
  margin-bottom: 10px;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
`;

const FilterCheckbox = styled.input`
  margin-right: 5px;
`;

const StandardShop = () => {

    const businessData = BusinessData()
    const businessId = businessData.id

    const popularProducts = getPopularProducts(businessId)

    return (
        <>
            <Header />
            <Container>
                <Wrapper>
                    <Top>
                        <BreadcrumbContaienr>
                            <Breadcrumb>
                                Home / Shop
                            </Breadcrumb>
                        </BreadcrumbContaienr>
                        <SearchContaienr>
                            <SearchBox>
                                <Search placeholder="Search..." />
                            </SearchBox>
                        </SearchContaienr>
                    </Top>
                    <Bottom>
                        <SidebarContainer>
                            <SortFiltersContainer>
                                <FilterTitle>Sort</FilterTitle>
                                <SortSelect >
                                    <SortOption>One</SortOption>
                                    <SortOption>Two</SortOption>
                                    <SortOption>Three</SortOption>
                                </SortSelect>
                            </SortFiltersContainer>
                            <FiltersContainer>
                                <FilterTitle>Filters</FilterTitle>
                                <FilterGroup>
                                    <FilterHeading>Size</FilterHeading>
                                    <FilterList>
                                        <FilterItem>
                                            <FilterLabel>
                                                <FilterCheckbox type="checkbox" /> Small
                                            </FilterLabel>
                                        </FilterItem>
                                        <FilterItem>
                                            <FilterLabel>
                                                <FilterCheckbox type="checkbox" /> Medium
                                            </FilterLabel>
                                        </FilterItem>
                                        <FilterItem>
                                            <FilterLabel>
                                                <FilterCheckbox type="checkbox" /> Large
                                            </FilterLabel>
                                        </FilterItem>
                                        {/* Add more filters as needed */}
                                    </FilterList>

                                </FilterGroup>

                                <FilterGroup>
                                    <FilterHeading>Memory</FilterHeading>
                                    <FilterList>
                                        <FilterItem>
                                            <FilterLabel>
                                                <FilterCheckbox type="checkbox" /> 32 GB
                                            </FilterLabel>
                                        </FilterItem>
                                        <FilterItem>
                                            <FilterLabel>
                                                <FilterCheckbox type="checkbox" /> 64 GB
                                            </FilterLabel>
                                        </FilterItem>
                                        <FilterItem>
                                            <FilterLabel>
                                                <FilterCheckbox type="checkbox" /> 128 GB
                                            </FilterLabel>
                                        </FilterItem>
                                        {/* Add more filters as needed */}
                                    </FilterList>

                                </FilterGroup>
                            </FiltersContainer>
                        </SidebarContainer>
                        <ProductsContainer>
                            <Products products={popularProducts} />
                        </ProductsContainer>
                    </Bottom>
                </Wrapper>
            </Container>
            <Footer />
        </>
    )
}

export default StandardShop