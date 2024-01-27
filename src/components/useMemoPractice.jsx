import React from 'react'

const useMemoPractice = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  
  const doubleNumber = useMemo( () => slowFunction(number), [number])
  //when the number changes run the code inside slow function and don't run it every time component re-renders

  const themestyle = useMemo(() => {
    return {backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }},[dark])

  //every time state changes the component re-renders, so the refernce of theme style is
  // different every time and thus useeffect runs in this case even when it shouldn't
  // so we put themestyles in useMemo and make it work only when dark is changed

  useEffect(()=> {
    console.log('theme changed')
  },[themestyle])

  return (
    <div>
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themestyle}>{doubleNumber}</div>
    </div>
  )
}

function slowFunction(num){
  console.log('calling slow funcction')
  for(let i=0; i<= 1000000000; i++){}
  return num * 2
}

export default useMemoPractice