import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, remove } from './TodoReducers'




export const Todo = () => {
  const [input,SetInput]= useState('')

  const todo = useSelector((state)=> state.todo.data)
  const dispatch = useDispatch()



  const handleAdd = ()=>{
    if(input !== ''){
        dispatch(addItem(input))
        SetInput('')
    }
  }


  const handleDelete = (itm)=>{
    dispatch(remove(itm))
  }
  

    return (
    <div>
   <h1>ToDo App</h1>
   <div>
   <input type="text" 
   value={input}
   placeholder='enter your tasks..'
   onChange={(e)=> SetInput(e.target.value)}
   
   />
   <button onClick={handleAdd}>Add</button>


   </div>
   <div>
    <ol>
        {todo.map((todo,index)=>(
            <li key={index}>{todo}   <button onClick={()=>handleDelete(todo)}>Delete</button></li>
        ))

        }
    </ol>
   </div>


    </div>
  )
}
