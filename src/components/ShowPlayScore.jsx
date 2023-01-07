import { useContext } from 'react'
import { PlayContext } from '../context/PlayContext'

const ShowPlayScore = () => {
  const { score } = useContext(PlayContext)
  return (
    <div style={{
      textAlign:'center', marginTop: '15px',
      border: '1px solid',
      padding: '10px',
      borderColor: score === 0 ? 'red' : 'green'
    }}>Game Score: <b>{score}</b></div>
  )
}

export default ShowPlayScore