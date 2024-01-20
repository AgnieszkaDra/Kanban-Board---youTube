import './App.css'
import TaskCard from './task-card'
import { Task } from './data-tasks'

function App() {
  const task: Task =  {
    title: 'Do Market Research',
    id: 'BUS-1',
    points: 5,
  }
  
  return (
    <>
      <TaskCard task={task}></TaskCard>
      {/* <TaskCard title={'Competitor analysis'} id={'BUS-2'}></TaskCard>
      <TaskCard title={'Develop Business Strategy'} id={'BUS-3'} points={8}></TaskCard>
      <TaskCard title={'Develop Marketing Strategy'} id={'BUS-4'} points={5}></TaskCard> */}
    </>
  )
}

export default App