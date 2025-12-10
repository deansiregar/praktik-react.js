import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 
  const [filter, setFilter] = useState('all'); 

 
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return; 

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos(prevTodos => [newTodo, ...prevTodos]);
    setInputValue(''); 
  };


  const handleToggleComplete = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  const handleDeleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };


  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') {
      return !todo.completed;
    }
    if (filter === 'completed') {
      return todo.completed;
    }
    return true; 
  });


  const totalTodos = todos.length;
  const activeTodos = todos.filter(todo => !todo.completed).length;



  return (
    <div className="todo-container">
      <h2>My Todo List</h2>

    
      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Apa yang akan kamu lakukan?"
          className="todo-input"
        />
        <button type="submit" className="todo-add-btn">Tambah</button>
      </form>

    
      <div className="todo-filters">
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          Semua
        </button>
        <button
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'active' : ''}
        >
          Aktif
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          Selesai
        </button>
      </div>

   
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span>{todo.text}</span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="todo-delete-btn"
            >
              X
            </button>
          </li>
        ))}
      </ul>

     
      <div className="todo-stats">
        <p>Total Tugas: {totalTodos}</p>
        <p>Tugas Aktif: {activeTodos}</p>
      </div>
    </div>
  );
};

export default TodoList;