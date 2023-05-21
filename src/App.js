import { useState } from "react";
import Users from "./Users";
import UsersForm from "./UsersForm";


function App() {
  const [users,setUsers] = useState([{name:"John",email:"john@email.com",gen:"11"},{name:"Shami",email:"Shami@email.com",gen:"31"},{name:"Nathan",email:"Nathan@email.com",gen:"14"}])

  const handleAddUser = (data)=>{
    console.log(data)
    setUsers(data)
  }
  return (
    <div>
      <Users users={users}/>

      <UsersForm user={handleAddUser}/>
    </div>
  );
}

export default App;
