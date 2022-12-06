/* TodoItem Component */
import TodoItem from "../TodoItem/TodoItem";
/* TodoList Style */
import "./_style.scss";
export default function TodoList({todos,onDelete,onChange}){
    return(
        <div className="todoList">
            {
                todos.map((todo)=>{
                    return (
                        <TodoItem key={todo.id} todo={todo} onChange={onChange} onDelete={onDelete}/>
                    )
                })
            }
        </div>
    )
}