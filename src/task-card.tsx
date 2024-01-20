const TaskCard = ({task}: {
  task: Task
 }) => {
  const num = 1
  const num2 = 2
  const num3 = num + num2
    return <div className="border rounded-lg px-2 m-2">
      <div className='text-base font-semibold py-2'>
         {task.title}!!! {num3}
      </div>
      <div className={'flex gap-4 justify-between py-2 text-gray-700'}>
        <div>{task.id}</div>
        <div>El</div>
        <div>{task.points}</div>
      </div>
    </div>
  } 

  export default TaskCard