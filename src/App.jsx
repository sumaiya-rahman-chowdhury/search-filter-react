import { useState } from 'react'
import './App.css'

function App() {

  const [searchItem,setSearchItem] = useState('')
  const handleInputChange = (e) =>{
    const searchTerm = e.target.value ;
    setSearchItem(searchTerm)
  }
  return (
    <>
    <input type="text" 
    value={searchItem}
    onChange={handleInputChange}
    placeholder='Type to search'
    />
    </>
  )
}

export default App
