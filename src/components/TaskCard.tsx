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

const TaskCard = ({task}: {
  task: Task
 }) => {
  const num = 1
  const num2 = 2
  const num3 = num + num2
    return <div className="border rounded-lg px-2 m-2 bg0gray-50 w-52">
      <div className='text-base font-base py-2'>
         {task.title}!!! {num3}
      </div>
      <div className={'flex gap-4 justify-between py-2 text-gray-500 text-sm'}>
        <div className={'flex gap-2'}>
          <div>{task.id}</div>
          <div>{task.priority}</div>
          {task.priority === 'high' ? <div>{highPriorityIcon}</div> : null}
          {task.priority === 'medium' && <div>{equalPriorityIcon}</div>}
          {task.priority === 'low' && <div>{lowPriorityIcon}</div>}
        </div>
        <div>{task.points}</div>
      </div>
    </div>
  } 

  export default TaskCard