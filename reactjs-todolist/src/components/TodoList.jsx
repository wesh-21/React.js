import React from 'react'

export default function TodoList() {

    let todos = [
        'Go to the MMA class',
        'Learn React',
        'Do the laundry'

    ]
    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <li className='todoItem' key={todoIndex}> 
                    {todo} 
                    <i class="fa-brands fa-medium"></i>
                    </li>
                )
            })}
        </ul>
  )
}
