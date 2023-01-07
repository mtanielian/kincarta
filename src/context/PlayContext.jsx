import { createContext, useEffect, useState } from 'react'

export const PlayContext = createContext()

const TIME_GAME = 60

export const PlayContextProvider = ({ children }) => {
  const [isValidPalindrome, setIsValidPalindrome] = useState(false)
  const [word, setWord] = useState('')
  const [score, setScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [counterTymeGame, setCounterTymeGame] = useState(TIME_GAME)
  const [loopInterval, setLoopInterval ] = useState(null)
  const [loopCounter, setLoopCounter ] = useState(null)
  
  useEffect(() => {
    return () => resetGame()
  }, []  )

  
  useEffect(() => {
    if (isGameStarted) {
      setLoopInterval(
        setInterval(() => {
          setIsGameOver(true)
        }, 1000 * TIME_GAME)
      )
      
      setLoopCounter(setInterval(() => {
        setCounterTymeGame(prev => prev - 1)
      }, 1000)
      )
    }
  }, [isGameStarted])

  useEffect(() => {
    if (counterTymeGame === 0) {
      resetGame()
    }
  }, [counterTymeGame])

  const resetGame = () => {
    setIsGameStarted(false)
    setCounterTymeGame(TIME_GAME)
    clearInterval(loopInterval)
    clearInterval(loopCounter) 
  }
  
  return (
    <PlayContext.Provider value={{
      isValidPalindrome, setIsValidPalindrome,
      word, setWord,
      score, setScore,
      isGameOver, setIsGameOver,
      isGameStarted, setIsGameStarted, counterTymeGame
    }}>
      {children}
    </PlayContext.Provider>
  )
}



