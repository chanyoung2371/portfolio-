import { Input, List,Button } from '@mui/material'
import React from 'react'

const TodoList = ({ id, item, onCheck }) => {
    return (
        
        <div>
           <List>
           {item}
           <Button onClick={()=>{onCheck(id)}}>삭제</Button>
           </List>
          
        </div>
    )
}

export default TodoList
