export const isValidAplindrome = (str) => {
  const lowRegStr = str.toLowerCase()
  const reverseStr = lowRegStr.split('').reverse().join('') 
  
  return reverseStr === lowRegStr
}
