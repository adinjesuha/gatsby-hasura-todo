import gql from 'graphql-tag'

// Add a todo
export const ADD_TODO = gql`
  mutation addTodo($todo: String!){
    insert_todo( objects:[{
        todo: $todo
      }]){
      returning{
        id
      }
    }
  }
`
// Delete a todo
export const DELETE_TODO = gql`
  mutation deleteTodo($id: Int!){
    delete_todo(where:{id:{_eq:$id}}){
      affected_rows
    }
  }
`
// Update a todo
export const UPDATE_TODO = gql`
  mutation updateTodo($id: Int!){
    update_todo(
      where: {id: {_eq: $id}},
      _set: {done: true}
    ){
      affected_rows
      returning{
        id
        done
      }
    }
  }
`


// Query all todos
export const TODO = gql` 
  query { 
    todo(order_by: {id: asc}){
      id
      todo
      done
    }
  }
`