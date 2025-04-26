import "./input.component.styles.css"

function InputBox({ newTask, setNewTask, addTask }) {
    document.add

    return (
        <div id="input">
            <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter Task"
            />

            <button onClick={addTask}>Add Task</button>
        </div>
    )    
}

export default InputBox