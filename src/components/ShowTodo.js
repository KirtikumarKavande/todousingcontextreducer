import React, { useContext } from 'react'
import TodoContext from '../context/TodoContex.js'

const ShowTodo = () => {
  const ctxdata=useContext(TodoContext)
console.log(ctxdata)
  return (
    <div>ShowTodo</div>
  )
}

export default ShowTodo