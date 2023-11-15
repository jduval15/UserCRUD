import './style/UserCard.css'

const UserCard = ({ user, deleteUser, setInfoUpdate, setIsDisable }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)

    }

    const handleEdit = () => {
        setInfoUpdate( user )
        setIsDisable(false)

    }



    return (
        <div className="card">
        <div className="card-header">
          <h3>{user.first_name} {user.last_name}</h3>
        </div>
        <div className="card-body">
          <ul>
            <li>
              <span>Email</span>
              <span>{user.email}</span>
            </li>
            <li>
              <span>Birthday</span>
              <span>{user.birthday}</span>
            </li>
          </ul>
        </div>
        <div className="card-footer">
          <button onClick={handleDelete}>
            <i className="bx bx-trash"></i>
          </button>
          <button onClick={handleEdit}>
            <i className="bx bx-edit-alt"></i>
          </button>
        </div>
      </div>
      
    )
}

export default UserCard