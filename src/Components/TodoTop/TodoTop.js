/* TodoTop Style */
import "./_style.scss";
export default function TodoTop({todos,onClearCompleted}){
    const completedSize = todos.filter((todo) => todo.completed).length;
    return(
        <div className="todoTop">
            <label className="container">
                <input type="checkbox" onChange={onClearCompleted}/>
                <span className="checkmark"></span>
                <h3 className="hideText to-media">Hide completed</h3>
            </label>
        </div>
    )
}