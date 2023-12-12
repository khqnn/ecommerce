import styled from 'styled-components'
import { mobile } from '../responsive'
import Heading from './Heading'
import { CardFactory } from './Cards/Factory'

const Container = styled.div``

const Wrapper = styled.div`
display: grid;
grid-template-columns: auto auto auto;
width: 100%;
display: flex;
flex-wrap: wrap;

${mobile({ gridTemplateColumns: 'auto', rowGap: '40px' })}
`
const ItemContainer = styled.div`
width: 33.33%;
${mobile({ width: '100%' })}

`

const CardList = ({ id, items, heading = null }) => {


    const cardFactory = new CardFactory(id)


    return (
        <Container className='margin-medium'>
            {heading && <Heading text={heading} />}
            <Wrapper>
                {items.map((item) => (
                    <ItemContainer>
                        {cardFactory.init(item)}
                    </ItemContainer>
                ))}
            </Wrapper>
        </Container>
    )
}

export default CardList