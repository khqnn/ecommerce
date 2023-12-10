import styled from "styled-components"
import Header from "../../../components/Header"
import Products from "../../../components/Products"
import { BusinessData } from "../../../theme/BusinessWrapper"
import { getPopularCategories, getPopularProducts, getProducts } from "../../../api/utils"
import Footer from "../../../components/Footer"
import { useState } from "react"
import { mobile } from "../../../responsive"
import { useParams } from "react-router-dom"
import { Tune, Close } from "@material-ui/icons";
import { Badge } from "@material-ui/core";


const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        color: props => props.textColor,
        backgroundColor: props => props.backgroundColor,
    }
})

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
${mobile({ display: 'none' })}
`

const BreadcrumbContaienr = styled.div`
flex: 1;
display: flex;
align-items: center;
`

const Breadcrumb = styled.div`
margin-left: 100px;
${mobile({marginLeft: '20px'})}

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
font-size: x-large;
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
${mobile({ display: 'none' })}
`
const ProductsContainer = styled.div`
flex: 4;
margin: 30px;
// margin-right: 100px;
display: grid;
grid-template-columns: auto auto auto auto;
${mobile({marginRight: '20px'})}
`

const SortFiltersContainer = styled.div`
padding: 10px;
padding-left: 100px;
background-color: white;
border-bottom: 0.01em solid gray;
${mobile({paddingLeft: '20px'})}

`
const SortSelect = styled.select`
width: 100%;
border: none;
`

const SortOption = styled.option`
`

const FilterTitle = styled.h2`
margin: 10px 0;

`

const FiltersContainer = styled.div`
padding-left: 100px;
padding-top: 20px;
height: 100vh;
background-color: white;
${mobile({paddingLeft: '20px'})}

`

const FilterGroup = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
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

const MobileFilterContainer = styled.div`
display: none;
${mobile({ display: 'block' })}
`


const DrawerContainer = styled.div`
    z-index: 100;
  width: 300px;
  height: 100vh;
  background-color: white;
  position: fixed;
  overflow: auto;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  transition: left 0.3s ease-in-out;
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: white;
`;

const DrawerContent = styled.div`
  padding: 20px;

`;

const CloseButton = styled.button`
  background-color: white;
  color: black;
  padding: 10px;
  cursor: pointer;
  border: none;
`;

const FilterDrawerButton = styled.button`
  color: black;
  padding: 10px;
  cursor: pointer;
  margin-left: 10px;
  border: none;
  background-color: transparent;
`;

const DrawerFilterButtonContainer = styled.div`
padding: 10px 20px;
display: flex;
flex-direction: row;
`

const CategoryFilterContainer = styled.div`
display: ${props => props.display ? 'block' : 'none'};
`

const CategoryBannerContaienr = styled.div`
width: 100%;
height: fit-content;
`
const CategoryBanner = styled.img`
width: 100vw;
height: 500px;
${mobile({ height: '120px' })}
`

const StandardShop = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const { id } = useParams()

    const businessData = BusinessData()
    const businessId = businessData.id

    const products = getProducts(businessId)
    const popularCategories = getPopularCategories(businessId)

    const categoryFound = popularCategories.find(category => category.slug == id)


    const filters = [
        {
            "id": 1,
            "name": "Size",
            "options": [
                {
                    "id": 1,
                    "name": "Small"
                },
                {
                    "id": 2,
                    "name": "Medium"
                },
                {
                    "id": 3,
                    "name": "Large"
                }
            ]
        },
        {
            "id": 2,
            "name": "Memory",
            "options": [
                {
                    "id": 1,
                    "name": "32 GB"
                },
                {
                    "id": 2,
                    "name": "64 GB"
                },
                {
                    "id": 3,
                    "name": "128 GB"
                }
            ]
        }
    ]


    return (
        <>
            <Header />
            <Container>
                {categoryFound && categoryFound.banner &&
                    <CategoryBannerContaienr>
                        <CategoryBanner src={categoryFound.banner} />
                    </CategoryBannerContaienr>
                }

                <Wrapper>

                    <MobileFilterContainer>

                        <DrawerFilterButtonContainer>
                            <SearchContaienr>
                                <SearchBox>
                                    <Search placeholder="Search..." />
                                </SearchBox>
                            </SearchContaienr>
                            <FilterDrawerButton border="0.01em solid gray" onClick={toggleDrawer}>

                                <StyledBadge color="primary">
                                    <Tune />
                                </StyledBadge>
                            </FilterDrawerButton>
                        </DrawerFilterButtonContainer>

                        <DrawerContainer isOpen={isOpen}>
                            <DrawerHeader>
                                <CloseButton onClick={toggleDrawer}>
                                <StyledBadge color="primary">
                                        <Close />
                                    </StyledBadge>
                                </CloseButton>
                            </DrawerHeader>
                            <DrawerContent>
                                <SortFiltersContainer>
                                    <FilterTitle>Sort</FilterTitle>
                                    <SortSelect >
                                        <SortOption>Price (High to Low)</SortOption>
                                        <SortOption>Price (Low to High)</SortOption>
                                        <SortOption>Latest</SortOption>
                                        <SortOption>Name (A to Z)</SortOption>
                                        <SortOption>Name (Z to A)</SortOption>

                                    </SortSelect>
                                </SortFiltersContainer>

                                <FiltersContainer>
                                    <CategoryFilterContainer display={!categoryFound}>
                                        <FilterTitle>Categories</FilterTitle>
                                        <FilterList>
                                            {popularCategories.map((category) => (
                                                <FilterItem>
                                                    <FilterLabel>
                                                        {category.title}
                                                    </FilterLabel>
                                                </FilterItem>
                                            ))}
                                        </FilterList>
                                    </CategoryFilterContainer>

                                    <FilterTitle>Filters</FilterTitle>
                                    {filters.map((filter) => (
                                        <FilterGroup>
                                            <FilterHeading>{filter.name}</FilterHeading>
                                            <FilterList>
                                                {filter.options.map((filterOption) => (
                                                    <FilterItem>
                                                        <FilterLabel>
                                                            <FilterCheckbox type="checkbox" /> {filterOption.name}
                                                        </FilterLabel>
                                                    </FilterItem>
                                                ))}
                                            </FilterList>
                                        </FilterGroup>

                                    ))}
                                </FiltersContainer>

                            </DrawerContent>
                        </DrawerContainer>
                    </MobileFilterContainer>
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
                                        <SortOption>Price (High to Low)</SortOption>
                                        <SortOption>Price (Low to High)</SortOption>
                                        <SortOption>Latest</SortOption>
                                        <SortOption>Name (A to Z)</SortOption>
                                        <SortOption>Name (Z to A)</SortOption>
                                </SortSelect>
                            </SortFiltersContainer>
                            <FiltersContainer>
                                <CategoryFilterContainer display={!categoryFound}>
                                    <FilterTitle>Categories</FilterTitle>
                                    <FilterList>
                                        {popularCategories.map((category) => (
                                            <FilterItem>
                                                <FilterLabel>
                                                    {category.title}
                                                </FilterLabel>
                                            </FilterItem>
                                        ))}
                                    </FilterList>
                                </CategoryFilterContainer>

                                <FilterTitle>Filters</FilterTitle>
                                {filters.map((filter) => (
                                    <FilterGroup>
                                        <FilterHeading>{filter.name}</FilterHeading>
                                        <FilterList>
                                            {filter.options.map((filterOption) => (
                                                <FilterItem>
                                                    <FilterLabel>
                                                        <FilterCheckbox type="checkbox" /> {filterOption.name}
                                                    </FilterLabel>
                                                </FilterItem>
                                            ))}
                                        </FilterList>
                                    </FilterGroup>

                                ))}
                            </FiltersContainer>
                        </SidebarContainer>
                        <ProductsContainer>
                            <Products products={products} />
                        </ProductsContainer>
                    </Bottom>
                </Wrapper>
            </Container>
            <Footer />
        </>
    )
}

export default StandardShop