import React from "react"
import Item from './components/Item.js'
import todosData from './data/todosData.js'

function App(){

    const todoItem = todosData.map(todoData => <Item key={todoData.id} item={todoData}/>)

    return(
        <>
        {todoItem}
        </>
    )
}

export default App;