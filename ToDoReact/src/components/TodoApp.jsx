import {useState} from 'react';
import "./TodoApp.css";
const TodoApp = () => {
    //Lista de tarefas 
    const [todos, setTodos] = useState([]);

    const[inputValue, setInputValue] = useState("");
    //adicionar tarefa
    const handleSubmit = (e)=>{
      e.preventDefault();

      if(inputValue.trim() !== ''){
        const newTodo ={
            id: Date.now(),
            text: inputValue
        }
        setTodos((prevTodos) => [...prevTodos,newTodo]);
        setInputValue("");
      }
    }
  // Deletar tarefa
  const deleteItem = (idDelete) => {
    const newList = todos.filter((todo) => todo.id !== idDelete);
    setTodos(newList);
  };
  return (
    <div className='app-container'>
      <h1 className = "title">Lista de tarefas</h1>
      {/*Form para adicionar tarefas*/}
      <form onSubmit={handleSubmit} className='form-container'>
        <input className='input-field' type="text" placeholder='Adicione uma tarefa' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button type='submit' className='add-button'>Criar nota</button>
      </form>
      {/*Lista de tarefas*/}
      {todos.length === 0 && <p className='empty'>Não há tarefas.</p>}
      <ul className='todo-list'>
        {todos.map((todo)=> (
          <li key={todo.id} className='todo-item'>{todo.text}  <button className='delete-btn' onClick={() => deleteItem(todo.id)}>Excluir</button></li>
         
        ))}
      </ul>
      
    </div>
  )
}

export default TodoApp
