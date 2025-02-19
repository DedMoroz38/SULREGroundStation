import styled from 'styled-components'
import { RocketWrapper } from './middle/rocket'

export const Middle = () => {
  return (
    <Wrapper>
      <RocketPositionWrapper>
        <RocketWrapper />
      </RocketPositionWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-left: 1px solid white;
  display: flex;
  flex-direction: column;
`

const RocketPositionWrapper = styled.div`
  border: 1px solid white;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 70vh;
  width: 400px;
  & > img {
    filter: invert(1);
    height: 40vh;
  }
`
