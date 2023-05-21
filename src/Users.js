import React from 'react'

function Users({users}) {
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Gen</th>
    </tr>
  </thead>
  <tbody>
  {users?.map(user =>(
    <tr key={user.name}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.gen}</td>
    </tr>
     ))}
   
  </tbody>
</table>
    </div>
  )
}

export default Users
