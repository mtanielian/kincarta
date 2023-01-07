import { useContext } from 'react'
import { PlayContext } from '../context/PlayContext'
import { Box, Button } from '@mui/material'

const LetsStartToPlay = () => {
  const { setIsGameStarted } = useContext(PlayContext)
  return (
    <Box>
      <Button variant='outlined' fullWidth onClick={()=> setIsGameStarted(true)}> Lets start to play </Button>
    </Box>
  )
}

export default LetsStartToPlay