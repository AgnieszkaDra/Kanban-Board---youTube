import { useState } from "react"
import { Task } from "../utils/data-tasks"

const highPriorityIcon = <svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
width="24"
height="24"
>
<g>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M5 10l7-7m0 0l7 7m-7-7v18"
  ></path>
</g>
</svg>

const lowPriorityIcon = <svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
width="24"
height="24"
>
<g>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M19 14l-7 7m0 0l-7-7m7 7V3"
  ></path>
</g>
</svg>

const equalPriorityIcon = <svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
width="24"
height="24"
>
<g>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M4 6h16M4 12h16m-7 6h7"
  ></path>
</g>
</svg>

const TaskCard = ({task, updateTask}: {
  task: Task
  updateTask: (task: Task) => void
 }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const points = task.points || 0
  const updatePoints = (direction: 'up' | 'down') => {
    const fib = [0,1,2,3,5,8,13]
    const index = fib.indexOf(points)
    const nextIndex = direction === 'up' ? index + 1 : index - 1
    const newPoints = fib[nextIndex]
    if(newPoints) {
      updateTask({ ...task, points: newPoints })
    }
   }
    return <div 
    draggable
    onDragStart={(e) => {
      e.dataTransfer.setData("id", task.id)
    }} 
    className="border rounded-lg px-2 m-2 bg-gray-50 w-56"
    >
      {isEditingTitle ? (
        <input
          autoFocus
          className="w-full"
          onBlur={() => setIsEditingTitle(false)}
          value={task.title}
          onChange={(e) => updateTask({ ...task, title: e.target.value })}
        >
        </input>
      ):(
        <>
          <div className='text-base font-base py-2' onClick={() => setIsEditingTitle(true)}>
         {task.title}!!!
      </div>
      <div className={'flex gap-4 justify-between py-2 text-gray-500 text-sm'}>
        <div className={'flex gap-2'}>
          <div>{task.id}</div>
          <div>{task.priority}</div>
          {task.priority === 'high' ? <div>{highPriorityIcon}</div> : null}
          {task.priority === 'medium' && <div>{equalPriorityIcon}</div>}
          {task.priority === 'low' && <div>{lowPriorityIcon}</div>}
        </div>
        <div className={'flex gap-2 items-center'}>
          <button onClick={() => updatePoints('down')}>-</button>
          <div className={'font-bold'}>{points}</div>
          <button onClick={() => updatePoints('up')}>+</button>
        </div>
      </div> 
        </>
      )}
     
    </div>
  } 

  export default TaskCard