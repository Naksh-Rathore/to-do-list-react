import React, { useState } from "react"
import InputBox from "../input-component/input.component"
import "./task.component.styles.css"

function Task() {
    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState([])

    const taskComponents = tasks.map((task, index) => <div key={task} className="task">
        <p>{task}</p>

        <button className="doneTask" onClick={() => deleteTask(task)}>Done</button>
        <button className="moveTask" onClick={() => moveTask(index, -1)}>👆</button>
        <button className="moveTask" onClick={() => moveTask(index, 1)}>👇</button>
    </div>)

    const addTask = () => {
        if (newTask.trim().length > 0 && !tasks.includes(newTask) && newTask.length <= 15) {
            setTasks(t => [...t, newTask])
        }

        setNewTask("")
    }

    const deleteTask = taskToDelete => {
        setTasks(prevTasks => prevTasks.filter(task => task !== taskToDelete));
    }

    const moveTask = (index, direction) => {
        setTasks(prevTasks => {
            const updated = [...prevTasks]
            const newIndex = index + direction
    
            if (newIndex < 0 || newIndex >= updated.length) {
                return prevTasks
            }            

            [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]]
    
            return updated
        })
    }

    return (
        <div id="to-do-list-container">
            <h1>To-Do List</h1>

            <InputBox setNewTask={setNewTask} 
                      newTask={newTask} 
                      addTask={addTask}/>

            <div id="tasks">
                {taskComponents}
            </div>
        </div>
    )
}

export default Task