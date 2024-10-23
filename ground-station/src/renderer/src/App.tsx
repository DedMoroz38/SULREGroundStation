import { Bottom } from './components/bottom'
import styled from 'styled-components'
import { Main } from './components/main'
import { useEffect } from 'react'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  useEffect(() => {
    ipcHandle()
  }, [])

  return (
    <Wrapper>
      <Main />
      <Bottom />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 6fr 1fr;
  height: 100vh;
`

export default App
