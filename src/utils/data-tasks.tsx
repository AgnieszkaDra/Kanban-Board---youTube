export type Status = 'todo' | 'in-progress' | 'done'
export type Priority = 'low' | 'medium' | 'high'
export type Task = {
    title: string,
    id: string, 
    status: Status,
    priority: Priority,
    points?: number
  }

export const statutes: Status[] = ['todo', 'in-progress', 'done']
export const priorities: Priority[] = ['low', 'medium', 'high']

export const tasks: Task[] =  [
    {  
      title: 'Do Market Research',
      id: 'BUS-1',
      status: 'todo',
      priority: 'low',
      points: 5,
    },
    {
      title: 'Competitor analysis',
      id: 'BUS-2',
      priority: 'medium',
      status: 'done'
    },
    {
      title: 'Develop Business Strategy',
      id: 'BUS-3',
      priority: 'high',
      status: 'in-progress',
      points: 8,
    },
    {
      title: 'Develop Marketing Strategy',
      id: 'BUS-4',
      priority: 'high',
      status: 'todo',
      points: 5,
    },
    {
      title: 'Develop marketing plan',
      id: 'BUS-5',
      priority: 'medium',
      status: 'todo',
      points: 1,
    },
    {
      title: 'Implement marketing plan',
      id: 'BUS-6',
      priority: 'low',
      status: 'todo',
      points: 4,
    }
  ]