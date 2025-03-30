import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './redux/todosSlice';
import { useState } from 'react';

const App = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  
  return (
    <>
      <div className='app'>
        <h1>Lista de Tareas</h1>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e=>e.key==='Enter'&& handleAdd()}
            placeholder="Nueva tarea"
          />
          <button onClick={handleAdd}>Agregar</button>

        <p>Total de tareas: {todos.length}</p>
        <ul className='task-list'>
          {todos.map(todo => (
            <li key={todo.id} className='task-item'>
              {todo.text}
              <button onClick={() => handleDelete(todo.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
