import { Badge } from '@material-ui/core';
import { Search, Close } from "@material-ui/icons";
import React, { useState } from 'react'
import styled from 'styled-components';

const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        color: props => props.textColor,
        backgroundColor: props => props.backgroundColor,
    }
})

const SearchPopupContainer = styled.div`
z-index: 100;
width: 100vw;
height: 100vh;
background-color: white;
position: fixed;
overflow: auto;
top: ${({ isOpen }) => (isOpen ? '0' : '-100vh')};
left: 0;
transition: top 0.3s ease-in-out;
display: flex;
flex-direction: column;
`

const SearchCloseButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: end;
`

const SearchCloseButton = styled.button`
  background-color: white;
  color: black;
  padding: 10px;
  cursor: pointer;
  border: none;
`;

const SearchbarContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const SearchContainer = styled.div`
display: flex;
flex-direction: column;
background-color: white;
height: fit-content;;
`

const SearchbarWrapper = styled.div`
height: 60px;
border: 0.01em solid black;
display: flex;
flex-direction: row;
`

const Searchbar = styled.input`
padding: 0px;
width: 80vw;
height: 100%;
border: none;
flex: 11;
padding-left: 20px;
`

const SearchButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-left: 0.01em solid black;
flex: 1;
`

const SearchItemContainer = styled.div`
border: 0.01em solid black;
overflow: auto;
max-height: 400px;
`
const SearchItem = styled.div`
display: flex;
flex-direction: row;
border-bottom: 0.01em solid black;
`
const SearchItemImage = styled.img`
height: 80px;
flex: 1;
`;
const SearchItemDetail = styled.div`
flex: 8;
padding-left: 20px;
display: flex;
flex-direction: column;
justify-content: center;
`;
const SearchItemName = styled.div`
font-weight: bold;
font-size: large;
`;
const SearchItemDesc = styled.div`
font-size: small;
`;
const SearchItemPrice = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`

const SearchPopup = ({ isOpen, setIsOpen }) => {


    // const [isOpen, setIsOpen] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [searchItems, setSearchItems] = useState([])

    const sampleSearchItems = [
        {
            id: 1,
            image: "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png",
            name: "Awesome shirt",
            desc: "Best quality shirt in the market",
            price: 2.00
        },
        {
            id: 2,
            image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A",
            name: "Black shoes",
            desc: "Most comfirtable shoes in the world",
            price: 3.33
        },
        {
            id: 3,
            image: "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png",
            name: "Local shirt",
            desc: "Locally manufactured shirt",
            price: 1.5
        },
        {
            id: 2,
            image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A",
            name: "Black shoes",
            desc: "Most comfirtable shoes in the world",
            price: 3.33
        },
        {
            id: 3,
            image: "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png",
            name: "Local shirt",
            desc: "Locally manufactured shirt",
            price: 1.5
        }
    ]

    const toggleSearchPopup = () => {
        console.log('toogled');
        setIsOpen(!isOpen);
    };

    const handleSearchTyping = (e) => {
        const typedSearchText = e.target.value
        setSearchText(typedSearchText)
        if (typedSearchText.length > 2) {
            setSearchItems(sampleSearchItems)
        }
        else {
            setSearchItems([])
        }
    }

    const handleSearch = () => {
        console.log(searchText);
    }

    return (
        <SearchPopupContainer isOpen={isOpen}>
            <SearchCloseButtonContainer>
                <SearchCloseButton onClick={toggleSearchPopup}>
                    <StyledBadge color="primary">
                        <Close />
                    </StyledBadge>
                </SearchCloseButton>
            </SearchCloseButtonContainer>

            <SearchbarContainer>
                <SearchContainer>
                    <SearchbarWrapper>
                        <Searchbar onChange={e => handleSearchTyping(e)} type="text" placeholder='Search...' />
                        <SearchButtonContainer onClick={handleSearch}>
                            <StyledBadge color="primary">
                                <Search />
                            </StyledBadge>
                        </SearchButtonContainer>
                    </SearchbarWrapper>
                    <SearchItemContainer>
                        {searchItems.map((searchItem) => (
                            <SearchItem>
                                <SearchItemImage src={searchItem.image} />
                                <SearchItemDetail>
                                    <SearchItemName>{searchItem.name}</SearchItemName>
                                    <SearchItemDesc>{searchItem.desc}</SearchItemDesc>
                                </SearchItemDetail>
                                <SearchItemPrice>${searchItem.price}</SearchItemPrice>
                            </SearchItem>
                        ))}
                    </SearchItemContainer>
                </SearchContainer>
            </SearchbarContainer>
        </SearchPopupContainer>
    )
}

export default SearchPopup