import styled from 'styled-components'

export const Bottom = () => {
  return (
    <Wrapper>
      <div>
        <DataRow name={'Velocity'} value={'12 kmh'} />
        <DataRow name={'Attitude'} value={'0 km'} />
      </div>
      <div>
        <p>T+ 00:00:00</p>
      </div>
    </Wrapper>
  )
}

type DataRowProps = {
  name: string
  value: string
}

const DataRow = ({ name, value }: DataRowProps) => {
  return (
    <p>
      {name}: <span>{value}</span>
    </p>
  )
}

const Wrapper = styled.div`
  padding: 0 20px;
  width: 100vw;
  border-top: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
