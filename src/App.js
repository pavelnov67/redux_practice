import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { fetchUsers } from './redux/store/reducers/ActionCreators'
import { useAppDispatch } from './redux/hooks/hooks'

function App() {
  const { users, isLoading, error } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      <h1>Redux ToolKit fetched users:</h1>
      {error && <h2>{error}</h2>}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
