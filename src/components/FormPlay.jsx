import { useContext } from 'react'
import { PlayContext } from '../context/PlayContext'
import { TextField } from '@mui/material'
import { isValidAplindrome } from '../utils/validAplindrome'

const FormPlay = () => {
  const { setWord, word, setScore } = useContext(PlayContext)

  const handleSumbit = (e) => {
    e.preventDefault()
    if (word === '' || word.length < 2) return

    const isValid = isValidAplindrome(word)
    if (isValid) {
      const numOfWords = word.split(' ').length === 1 ? 1 : 2
      setScore(prev => prev + numOfWords)
    }

    setWord('')
  }


  return (
    <form onSubmit={handleSumbit}>
      <TextField 
        label='Enter a word o phrase palindrome' 
        value={word}
        onChange={({target}) => setWord(target.value)} 
        variant='outlined' 
        fullWidth
        autoComplete='off'
      />
    </form>

  )
}

export default FormPlay