import { DataKeysEnum, dataKeysToName } from '@renderer/enums/DataKeysEnum'
import styled from 'styled-components'

export const Left = ({ data }: { data: Map<DataKeysEnum, number> }) => {
  return (
    <Wrapper>
      <div>
        {Array.from(data.entries()).map(([key, value]) => (
          <Item key={key} text={dataKeysToName(key)} value={value} />
        ))}
      </div>
      <button onClick={() => self.ElectronAPI.openSerial()}>Open Serial</button>
    </Wrapper>
  )
}

type ItemProps = {
  img?: string
  text: string
  value: number | string
}

const Item = ({ text, value }: ItemProps) => {
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
