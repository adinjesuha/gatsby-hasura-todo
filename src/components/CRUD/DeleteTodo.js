import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'reactstrap'
import {DELETE_TODO, TODO} from './queries'
import { MdDelete } from 'react-icons/md'



const DeleteTodo = ({id}) => {
  return (
    <Mutation 
      mutation={DELETE_TODO}
      variables={{id}}
      refetchQueries={[{ query: TODO }]}
    >
      {(deleteTodo, { data }) => (
        <span 
          data-toggle="tooltip"
          title="Delete Todo" 
          className="float-right mt-n2 ml-4"
        >
          <Button 
            color="danger"
            onClick={() => deleteTodo()}
          >
            <MdDelete />
          </Button>
        </span>
      )}
    </Mutation>
  )
}

export default DeleteTodo