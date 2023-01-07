import { useContext } from 'react'
import { PlayContext } from '../context/PlayContext'

const CounterTimeGame = () => {
  const { counterTymeGame } = useContext(PlayContext)

  return (
    <div>{counterTymeGame}</div>
  )
}

export default CounterTimeGame