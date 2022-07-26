import React, { useState } from 'react'
import classes from './Addnewuser.module.css'
import Card from './Card';
import Button from './Button'
import Error from './Error'

export default function Addnewuser(props) {
    const [username1, setusername1] = useState('')
    const [userage1, setuserage1] = useState('')
    const [error, seterror] = useState()

    const Adduser = (e) => {
        e.preventDefault();
    }
    const click = () => {
        if(userage1.trim().length===0 || username1.trim().length===0){
            seterror({
                title: "Blank !!",
                message:"Blank details is not allowed!!!!"
            })
        }
       else if(userage1<0){
            seterror({
                title: "Wrong!!",
                message:"Age should be >0!!!!"
            })
        }
        else 
        {
            props.onadd(username1, userage1);
        }
        setusername1('');
        setuserage1('');
    }
    const Onchangeusername = (event) => {
        setusername1(event.target.value);
    }
    const Onchangeuserage = (event) => {
        setuserage1(event.target.value);
    }
    const vanishmodal=()=>{
        seterror(null);
    }
    return (
        <div>
            {error && <Error vanish={vanishmodal} title={error.title} message={error.message}/>}
            <Card classes={classes.input}>
                <form onSubmit={Adduser}>
                    <label htmlFor="username">Username</label>
                    <input id='username' type="text" value={username1} onChange={Onchangeusername} />
                    <label htmlFor="age">Age</label>
                    <input id='age' type="number" value={userage1} onChange={Onchangeuserage} />
                    <Button onClick={click} type='submit'>Add user</Button>
                </form>
            </Card>
        </div>
    )
}
