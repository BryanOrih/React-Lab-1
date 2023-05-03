import React, {useState} from 'react'

const ItemList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
    const handleSubmit = event => {
      event.preventDefault();
      if (!newTodo) return;
      setTodos([...todos, newTodo]);
      setNewTodo('');
    };
  
    const handleChange = event => {
      setNewTodo(event.target.value);
    };
  
    const handleDelete = index => {
      setTodos(todos.filter((_, i) => i !== index));
    };
   
    const TodoItem = ({ index, todo, onDelete }) => {
      return (
        <li>
          {todo}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      );
    };
  return (
    <div>
        <h1>My Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  )
}

export default ItemList