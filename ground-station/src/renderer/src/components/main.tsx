import styled from 'styled-components'
import { Left } from './left'
import { Middle } from './middle'
import { Right } from './right'
import { useEffect, useState } from 'react'
import { DataKeysEnum } from '@renderer/enums/DataKeysEnum'

export const Main = () => {
  function stringToEnumMap(input: string): void {
    console.log(input)
    if (input.length === 0) {
      return
    }

    const parts = input.split(',').slice(2, -2)
    const map = new Map<DataKeysEnum, number>()

    for (let i = 0; i < parts.length - 2; i += 2) {
      const key = parseInt(parts[i], 10)
      const value = parseFloat(parts[i + 1])

      if (!isNaN(key) && key in DataKeysEnum) {
        map.set(key as DataKeysEnum, value)
      } else {
        map.set(Number(parts[i]), Number(value))
      }
    }

    // const checksumKey = parts[parts.length - 2]
    // const checksumValue = parseInt(parts[parts.length - 1], 10)
    // map.set(checksumKey, checksumValue)
    setData(map)
  }

  const [data, setData] = useState<Map<DataKeysEnum, number>>(new Map())

  useEffect(() => {
    window.ElectronAPI!.addEventListener('serialport-data', (data) => {
      stringToEnumMap(data)
    })
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <Wrapper>
      <Left data={data} />
      <Middle />
      <Right />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`
