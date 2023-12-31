import styled from "styled-components";
import { mobile } from "../responsive";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = ({ redirect = "" }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()
  const location = useLocation()
  const search = location.search
  const searchString = search.substring(1, search.length)
  const searchQueries = searchString.split("&")

  if (searchQueries && searchQueries.length > 0) {
    searchQueries.forEach((queryString) => {
      const [queryName, queryValue] = queryString.split("=")
      if (queryName == "redirect") {
        redirect = queryValue
      }
    })
  }

  const { login } = AuthData()

  const navigateToAnotherPage = (page) => {
    navigate(page)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(username, password)
      navigate("/" + redirect)
    } catch (error) {
      setErrorMessage(error)
    }

  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={e => handleLogin(e)}>
          <Input placeholder="username" onChange={e => setUsername(e.target.value)} />
          <Input placeholder="password" onChange={e => setPassword(e.target.value)} />
          <Button >LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link onClick={e => navigateToAnotherPage("/register")}>CREATE A NEW ACCOUNT</Link>
        </Form>
        <p>{errorMessage}</p>
      </Wrapper>
    </Container>
  );
};

export default Login;