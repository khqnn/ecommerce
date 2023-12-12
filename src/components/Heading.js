import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const HeadingContainer = styled.div`
display: flex;
text-align: center;
width: 100%;
margin: 40px auto;
`

const HeadingText = styled.h2`
width: 100%;

${mobile({fontSize: "1.5em"})};
`

const Heading = ({text}) => {
  return (
    <HeadingContainer>
        <HeadingText>{text}</HeadingText>
    </HeadingContainer>
  )
}

export default Heading