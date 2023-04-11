import React, { useState } from 'react'
import UserTable from './Tables/UserTable'
import AddUserForm from './Forms/AddUserForm';
import EditUserForm from './Forms/EditUserForm';

function App() {

  const usersData = [
    { id: 1, name: 'Viren', username: 'vribadiya123' },
    { id: 2, name: 'Darpan', username: 'dhirapara123' },
    { id: 3, name: 'Sagar', username: 'skoriya123' },
  ];

  const [users, setUsers] = useState(usersData);
  const initialFormState = { id: null, name: '', username: '' }
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  function addUser(user) {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id))
    setEditing(false);
  }

  function editRow(user) {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  function updateUser(id, updatedUser) {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  }

  return (
    <div>
      <h1>CRUD App with Hooks</h1>
          <div>
            {editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
        </div>

        <div>
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
        
      </div>
  )
}

export default App