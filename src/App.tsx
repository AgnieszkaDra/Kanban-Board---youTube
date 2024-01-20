import './App.css'
import TaskCard from './components/TaskCard'
import { tasks, statutes } from './utils/data-tasks'

function App() {
  const columns = statutes.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status)
    return {
      title: status,
      tasks: tasksInColumn
    }
  })
//  const todoTasks = tasks.filter((task) => task.status === 'todo')
//  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress')
//  const doneTasks = tasks.filter((task) => task.status === 'done')
  return (
    <div className='flex divide-x'>
      {columns.map((column) => (
        <div>
          <h2 className={'text-3xl p-2 capitalize font-bold text-gray-700'}>{column.title}</h2>
          {column.tasks.map((task) => <TaskCard task={task}/>)}
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