import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleAddTask = () => {
    if (!title.trim() || !description.trim()) {
      alert('Both title and description are required!')
      return
    }
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false
    }
    setTasks([...tasks, newTask])
    setTitle('')
    setDescription('')
  }

  return (
    <div>
      <div className="heading">
        <h1>MY WORK</h1>
        <span className="subheading">to do list</span>
      </div>

      <div className="add-task">
        <div className="input-labels">
          <label htmlFor="task-title">Title:</label>
          <label htmlFor="task-desc">Description:</label>
        </div>

        <div className="input-row">
          <input
            id="task-title"
            type="text"
            placeholder="what are you going to do?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            id="task-desc"
            type="text"
            placeholder="Description of your To Do"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="add-btn" onClick={handleAddTask}>Add</button>
        </div>
      </div>

      <div className="type-of-tasks">
        <button id="to-do">To Do</button>
        <button id="completed">Completed</button>
      </div>

      <div className="notebook-container">
        <div className="notebook-table">
          <div className="spiral-inside">
            {Array.from({ length: 22 }).map((_, i) => (
              <div key={i} className="spiral-ring"></div>
            ))}
          </div>

          {tasks.map((task, index) => (
            <div key={task.id} className="notebook-lines">
              <div className="task-content">
                <strong>{task.title}</strong>: {task.description}
              </div>
            </div>
          ))}

          {Array.from({ length: Math.max(0, 8 - tasks.length) }).map((_, i) => (
            <div key={`empty-${i}`} className="notebook-lines"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
