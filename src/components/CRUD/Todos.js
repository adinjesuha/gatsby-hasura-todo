import React from 'react';
import { Query } from 'react-apollo';
import { Alert } from 'reactstrap';
import { TODO } from './queries'

import DeleteTodo from './DeleteTodo'
import MarkTodo from './MarkTodo'


const Todos = () => {
  return (
    <div className="collection-item">
      <Query
        query={TODO}
      >
      {({loading, error, data}) => {
        if(loading) return <p>Loading...</p>
        if(error) return <p>Error...</p>
        if(data.todo.length){
          return data.todo.map(({id, todo, done}) => (
            <Alert key={id} color={done ? "success":"warning"}>
              <span  key={id}>{todo}</span>
              <DeleteTodo id={id} />
              <MarkTodo id={id} done={done}/>
            </Alert>
          ))
        }
        else {
          return <div> Add a new TODO...</div>
        }
      }}
      </Query>
    </div>
  )
}

export default Todos;