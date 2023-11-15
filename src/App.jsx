import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [ infoUpdate, setInfoUpdate ] = useState()

  const [ isDisable, setIsDisable ] = useState(false)

  const url =  `https://users-crud.academlo.tech`

  const [ users, getUsers, createUser, deleteUser, updateUser ] = useCrud(url)

  useEffect (() => {
    getUsers('/users')

  }, [])
console.log(users)

const handleNew = () => {
    setIsDisable(false)
}

  return (
  
    <div>
      <h1>Users</h1>
      <button onClick={handleNew} className='form__btn2'>+ Create New Users</button>
      <FormUser
        createUser={ createUser }
        infoUpdate={ infoUpdate }
        updateUser={ updateUser }
        setInfoUpdate={ setInfoUpdate }
        isDisable={ isDisable }
        setIsDisable={ setIsDisable }
      />
      <div className='container'>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              setIsDisable={setIsDisable}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App

