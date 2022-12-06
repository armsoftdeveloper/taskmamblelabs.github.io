/* React Hooks */
import {useState, useReducer} from "react";
/* App Components */
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";
import TodoFooter from "./Components/TodoTop/TodoTop";
/* App Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
/* App SCSS Style*/
import './App.scss'
function reducer(state, action) {
  if(action.type === "add") {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isCompleted: false
      }
    ];
  } else if(action.type === "delete") {
    return state.filter((t) => t.id !== action.payload.id);
  } else if(action.type === "clear-completed") {
    return state.filter((todo) => !todo.isCompleted);
  } else if(action.type === "update") {
    return state.map((todo) => {
      if(todo.id === action.payload.updatedTodo.id) {
        return action.payload.updatedTodo;
      }
      return todo;
    });
  }
}

function App() {
  const [isActive,SetIsActive] = useState(true)
  const [typography,setTypography] = useState([
    {
      topTitle:"Your Life Is A Blank Page. You Write On It.",
      bottomTitle:"So Start By Adding Your Tasks Here."
    }
  ])
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <div className="App">
      <div className="top-container">
        <TodoFooter todos={todos} onClearCompleted={() => {
          dispatch({
            type: "clear-completed"
          });
        }}/>
      </div>
      <TodoForm onAdd={(text) => {
        dispatch({
          type: 'add',
          payload: {
            text: text
          }
        });
      }} 
      isActive={isActive}
      SetIsActive={SetIsActive}/>
      <TodoList 
        todos={todos} 
        onDelete={(todo) => {
          dispatch({
            type: "delete",
            payload: {
              id: todo.id
            }
          });
        }}
        onChange={(newTodo) => {
          dispatch({
            type: "update",
            payload: {
              updatedTodo: newTodo
            }
          });
        }}
      />
      <div className={isActive ? `typography-active`: `typography-disabled`}>
        {typography.map((items,index)=>{
          return (
            <>
              <h4 key={index}>{items.topTitle}</h4>
              <h3 key={index}>{items.bottomTitle}</h3>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;