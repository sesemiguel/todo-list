import React from "react"
import Item from './components/Item.js'
import todosData from './data/todosData.js'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            todo: todosData
        }
    }

    render() {
        const todoItem = todosData.map(todoData => <Item key={todoData.id} item={todoData} />)
        return (
            <>
                {todoItem}
            </>
        )
    }
}

export default App;