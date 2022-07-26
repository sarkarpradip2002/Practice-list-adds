import React from 'react'
import Button from './Button'
import Card from './Card'
import classes from './Error.module.css'

export default function Eoor(props) {
  return (
    <div onClick={props.vanish} className={classes.backdrop}>
      <Card classes={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.vanish}>Okay</Button>
        </footer>
      </Card>
    </div>
  )
}
