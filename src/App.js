import { useState } from 'react';
import './App.css';
import Addnewuser from './Components/Addnewuser';
import Userlist from './Components/Userlist';

function App() {
  const [user, setuser] = useState([])
  const adding=(uname,uage)=>{
     setuser(()=>{
          return [...user,{name:uname,age:uage , id:Math.random.toString()}];
     })    
  }

  return (
    <div >
      <Addnewuser onadd={adding}/>
      <Userlist users={user}/>
    </div>
  );
}

export default App;
