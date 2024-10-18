import styled from 'styled-components'
import { Left } from './left'
import { Middle } from './middle'
import { Right } from './right'

export const Main = () => {
  return (
    <Wrapper>
      <Left />
      <Middle />
      <Right />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`
