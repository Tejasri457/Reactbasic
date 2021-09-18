import React, {useState} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
    const [todos, setTodos] = useState([
        {
            id:1,
            text: "Write a new blog post.",
            isCompleted: false
        }
    ]);

    const addTodo = (todo) => {
        setTodos([...todos, {text:todo}] );
    };

    const markComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };
    const updateTodo = (todoId, newValue) => {
      if (!newValue.text ) {
        return;
      }
  
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
  
    const editTitle = (index, title) => {
        const newTodos = [...todos];
        newTodos[index].text = title;
        setTodos(newTodos);
    };
    const removeTodo = id => {
      const removedArr = [...todos].filter(todo => todo.id !== id);
  
      setTodos(removedArr);
    };
  
    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      
      });
      setTodos(updatedTodos);
    };
    // this is a change
    return (
      <div className="parent-container">
          <div className="container top-container">
              <div className="app">
                  <div className="todoform">
                      <TodoForm addTodo={addTodo} />
                      <Todo todos={todos} markComplete={markComplete} editTitle={editTitle}
                      completeTodo={completeTodo}
                      updateTodo={updateTodo}
                      removeTodo={removeTodo}
                      />
                  </div>
              </div>
          </div>
      </div>
    );
}

export default App;

/*
import './App.css';
import Experiment from './components/Experiment';
function App() {
  return (
    <div className="App">
    
  <Experiment/>
  </div>
  );
}
export default App*/