import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'
import { tasks as initialTasks, statutes, Task } from './utils/data-tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const columns = statutes.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status)
    return {
      title: status,
      tasks: tasksInColumn
    }
  })

  const updateTaskPoints = (task: Task, points: number) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? { ...t, points } : t
      })
      setTasks(updatedTasks)
  }

  const updateTaskTitle = (task: Task, title: number) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? { ...t, title } : t
      })
      setTasks(updatedTasks)
  }
//  const todoTasks = tasks.filter((task) => task.status === 'todo')
//  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress')
//  const doneTasks = tasks.filter((task) => task.status === 'done')
  return (
    <div className='flex divide-x'>
      {columns.map((column) => (
        <div>
          <div className='flex justify-between text-3xl p-2 font-bold text-gray-500'>
            <h2 className={'capitalize'}>{column.title}</h2>
            {column.tasks.reduce((total, task) => total + (task?.points || 0), 0)} 
          </div> 
          {column.tasks.map((task) => (
            <TaskCard 
              task={task}
              updateTaskPoints={updateTaskPoints}
              updateTaskTitle={updateTaskTitle}
            />
          ))}
        </div>
      ))}
      
   
        {/* <h1>In Progress</h1>
        {inProgressTasks.map((task) => <TaskCard task={task}/>)}
      </div>
      <div>
        <h1>Done</h1>
        {doneTasks.map((task) => <TaskCard task={task}/>)}
      </div> */}
    </div>
  )
}

export default App