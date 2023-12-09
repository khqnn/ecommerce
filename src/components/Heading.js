import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const HeadingContainer = styled.div`
width: 100%;
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