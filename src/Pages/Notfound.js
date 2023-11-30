import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"
import styled from "styled-components";

const Container = styled.div`
`;

const Wrapper = styled.div`
display: flex;
text-align: center;
`;

const NotFound = styled.h1`
flex: 1;
height: 100%;
margin-top: 100px;
margin-bottom: 100px;

`


const Notfound = () => {
    return (
        <Container>
            <Wrapper>
                <NotFound>Not found</NotFound>

            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Notfound