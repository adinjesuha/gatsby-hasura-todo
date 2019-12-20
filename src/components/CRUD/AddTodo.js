import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { Button } from 'reactstrap'
import { ADD_TODO, TODO } from './queries'

const AddTodo = () => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (addTodo) => {
    if(todo.length > 0){
      addTodo()
      setTodo('')
    }
  }
  return (
    <Mutation 
      mutation={ADD_TODO}
      variables={{todo}}
      refetchQueries={[{query: TODO}]}
    >
    {(addTodo, { data }) => (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          handleSubmit(addTodo)
        }}>
          <label htmlFor="text">Add a new todo:</label>
          <input 
            type="text"
            onChange={e => setTodo(e.target.value)}
            value={todo}
          />
          <Button type="submit">Add todo</Button>
        </form>
      </div>
    )}
    </Mutation>
  )
}

export default AddTodo