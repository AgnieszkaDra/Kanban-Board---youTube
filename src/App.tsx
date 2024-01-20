import './App.css'
import TaskCard from './task-card'


function App() {
  const title = 'Do Market Research'
  const id = 'BUS-1'
  const points = 5
 
  return (
    <>
      <TaskCard title={title} id={id} points={points}></TaskCard>
      <TaskCard title={'Competitor analysis'} id={'BUS-2'} points={3}></TaskCard>
      <TaskCard title={'Develop Business Strategy'} id={'BUS-3'} points={8}></TaskCard>
      <TaskCard title={'Develop Marketing Strategy'} id={'BUS-4'} points={5}></TaskCard>
    </>
  )
}

export default App