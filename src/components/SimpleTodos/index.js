import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

class SimpleTodos extends Component {
  state = {
    todosList: [
      {id: 1, title: 'Wake Up Early', completed: false},
      {
        id: 2,
        title: 'Mindful Meditation or Breathing Exercises',
        completed: false,
      },
      {
        id: 3,
        title: 'Set Intentions for the Day',
        completed: false,
      },
      {id: 4, title: 'Work in Focused Blocks', completed: false},
      {id: 5, title: 'Order fruits on Big Basket', completed: false},
      {id: 6, title: 'Fix the production issue', completed: false},
      {id: 7, title: 'Eat Nutritious Meals', completed: false},
      {id: 8, title: 'Review Your Day', completed: false},
    ],
    newTodoTitle: '',
    newTodoCount: 1,
  }

  handleAddTodo = () => {
    const {newTodoTitle, newTodoCount} = this.state
    const newTodos = Array.from({length: newTodoCount}, (_, i) => ({
      id: Date.now() + i,
      title: newTodoTitle,
      completed: false,
    }))
    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodos],
      newTodoTitle: '',
      newTodoCount: 1,
    }))
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodoList = todosList.filter(todo => todo.id !== id)
    this.setState({todosList: updatedTodoList})
  }

  toggleComplete = id => {
    const {todosList} = this.state
    const updatedTodoList = todosList.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todosList: updatedTodoList})
  }

  render() {
    const {todosList, newTodoTitle, newTodoCount} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">Your Tasks</h1>
          <div className="add-todo">
            <input
              type="text"
              name="newTodoTitle"
              value={newTodoTitle}
              onChange={this.handleChange}
              placeholder="Enter todo title"
            />
            <input
              type="number"
              name="newTodoCount"
              value={newTodoCount}
              onChange={this.handleChange}
              placeholder="Enter number of todos"
            />
            <button onClick={this.handleAddTodo} type="button">
              Add
            </button>
          </div>
          <ul className="todos-list">
            {todosList.map(todo => (
              <TodoItem
                key={todo.id}
                todoDetails={todo}
                deleteTodo={this.deleteTodo}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
