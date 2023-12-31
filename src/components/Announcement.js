import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: ${(props)=> (props.color? props.color: 'teal')};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = ({text, color}) => {
  return <Container color={color} >{text}</Container>;
};

export default Announcement;