import React, { useState } from 'react'
import { Button, Input, Container } from '@mui/material';
import TodoList from '../Component/Todo/TodoList';
import { makeStyles } from '@mui/styles';
import { maxWidth } from '@mui/system';

const useStyles = makeStyles({
    root: {
        width:'100%',
        margin: '50px',
        padding: '16px',
        minHeight: '580px',
        maxWidth: '300px',
        backgroundColor:'#f1f5f8'
    },

})

function Todo() {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);

    function addTodo(event) {
        setTodo(addData => {
            return [...addData, input];
        });
        setInput("")
    }
    function deleteTodo(id) {
        setTodo(addData => {
            return addData.filter((item, index) => {
                return index !== id
            })
        })
    }
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <Container>
                <div>
                    <Input
                        type='text'
                        value={input}
                        onChange={(event) => { setInput(event.target.value) }}
                    />
                    <Button onClick={addTodo} >++</Button>
                </div>
                <div>
                    {todo.map((item, index) => (
                        <TodoList
                            key={index}
                            id={index}
                            item={item}
                            onCheck={deleteTodo} />
                    ))}

                </div>

            </Container>
        </div>

    )
}

export default Todo
