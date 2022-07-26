import React from 'react'
import Card from './Card'
import Liststyle from './Userlist.module.css'

export default function Userlist(props) {
  return (
    <Card classes={Liststyle.users}>
        <ul>
            {props.users.map(user=>{
               return <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>
            })}
        </ul>
    </Card>
  )
}
