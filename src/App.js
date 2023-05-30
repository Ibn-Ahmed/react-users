import { useState } from "react";
import Users from "./Users";
import UsersForm from "./UsersForm";


function App() {
  const [users,setUsers] = useState([])

  const handleAddUser = (data)=>{
    console.log(data)
    setUsers([...users, {name:data.name, email:data.email, gen:data.gen}])
  }
  return (
    <div>
      <Users users={users}/>

      <UsersForm user={handleAddUser}/>
    </div>
  );
}

export default App;
