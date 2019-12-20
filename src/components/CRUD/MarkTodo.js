import React from 'react'
import { Mutation } from 'react-apollo'
import { UPDATE_TODO, TODO } from './queries'
import { Button } from 'reactstrap'
import { MdDone } from 'react-icons/md'

const MarkTodo = ({id, done}) => {
  return (
    <Mutation
      mutation={UPDATE_TODO}
      variables={{id}}
      refetchQueries={[{query: TODO}]}
    >
      {(updateTodo, {data}) => {
        return(
          <span 
          data-toggle="tooltip"
          title="Mark todo" 
          className="float-right mt-n2 ml-4"
        >
          <Button 
            color="success"
            onClick={() => updateTodo()}
            disabled={done}
          >
            <MdDone/>
          </Button>
        </span>
        )
      }}
    </Mutation>
  )
}

export default MarkTodo