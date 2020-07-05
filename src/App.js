import React from "react"
import Item from './components/Item.js'
import todosData from './data/todosData.js'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            todo: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todo.map(todoData => {
                if(todoData.id === id){
                    todoData.completed = !todoData.completed
                }
                return todoData
            })

            return {
                todo: updatedTodos
            }
        })
    }

    render() {
        const todoItem = todosData.map(todoData => <Item key={todoData.id} item={todoData} handleChange={this.handleChange}/>)
        return (
            <>
                {todoItem}
            </>
        )
    }
}

export default App;