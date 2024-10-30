import { ipcRenderer } from 'electron'
import { useEffect } from 'react'
import styled from 'styled-components'

const list = [
  {
    img: 'https://via.placeholder.com/150',
    text: 'Pressure',
    value: '1Pa'
  },
  {
    img: 'https://via.placeholder.com/150',
    text: 'Thermocouples',
    value: '12 whatever'
  },
  {
    img: 'https://via.placeholder.com/150',
    text: 'packet lose',
    value: '100'
  }
]

export const Left = () => {
  useEffect(() => {
    self.ElectronAPI!.addEventListener('data-from-main', (version) => {
      console.log(version)
    })
  }, [])
  return (
    <Wrapper>
      <div>
        {list.map((item, index) => (
          <Item key={index} img={item.img} text={item.text} value={item.value} />
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
