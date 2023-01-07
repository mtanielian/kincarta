import { Container, Box } from '@mui/material'
import LetsStartToPlay from './components/LetsStartToPlay'
import { useContext } from 'react'
import { PlayContext } from './context/PlayContext'
import FormPlay from './components/FormPlay'
import ShowPlayScore from './components/ShowPlayScore'
import CounterTimeGame from './components/CounterTimeGame'


const App = () => {
  const { isGameStarted, isGameOver } = useContext(PlayContext)

  return (
    <Container style={{display:'flex', flexDirection:'column', justifyContent:'center', height: '70vh', alignItems: 'center'}}>
      <Box style={{width:'40%'}}>
        {!isGameStarted && !isGameOver && <LetsStartToPlay />}
        {isGameStarted && 
          <>
            <FormPlay />
            <ShowPlayScore /> 
            <CounterTimeGame />
          </>
        }
        {!isGameStarted && isGameOver && 
          <>
            <LetsStartToPlay />
            <ShowPlayScore />
          </>
        }
        
      </Box>
    </Container>
  )
}

export default App
