import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [apiUsers, setApiUsers] = useState([])
  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setApiUsers(data.users)
        setFilteredUsers(data.users)

      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false)
      })
  }, [])


  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
    const filteredItems = apiUsers.filter((user) =>
      user.firstName.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
    )
    setFilteredUsers(filteredItems)
  }


  return (
    <>
      <input type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />

      {/* {
          searchItem ? (
            filteredUsers.map(user => <li key={user.id}>{user.firstName}</li>)
          ) : (
            apiUsers.map(user => <li key={user.id}>{user.firstName}</li>)
          )
        }  */}
      {loading && <p>Loading</p>}
      { !loading && filteredUsers.length === 0 ?
        <p>No data found</p>
        :
        <ul>
          {filteredUsers.map(user => <li key={user.id}>{user.firstName}</li>)
          }
        </ul>
      }
    </>
  )
}

export default App
