import styled from 'styled-components'

export const Left = ({ data }) => {
  return (
    <Wrapper>
      <div>
        {Array.from(data.entries()).map(([key, value]) => (
          <Item key={key} img={null} text={`${key}`} value={value} />
        ))}
      </div>
      <button onClick={() => self.ElectronAPI.openSerial()}>Open Serial</button>
    </Wrapper>
  )
}

type ItemProps = {
  img: string
  text: string
  value: string
}

const Item = ({ img, text, value }: ItemProps) => {
  return (
    <div>
      {/* <img src={img} alt={text} /> */}
      <p>
        {text}: <span>{value}</span>
      </p>
    </div>
  )
}

const Wrapper = styled.div`
  padding-top: 100px;
  border-right: 1px solid white;
  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: fit-content;
  }
`
