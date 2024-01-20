export type Status = 'todo' | 'in-progress' | 'done'
export type Task = {
    title: string,
    id: string, 
    status: Status
    points?: number
  }

export const statutes: Status[] = ['todo', 'in-progress', 'done']

export const tasks: Task[] =  [
    {  
      title: 'Do Market Research',
      id: 'BUS-1',
      status: 'todo',
      points: 5,
    },
    {
      title: 'Competitor analysis',
      id: 'BUS-2',
      status: 'done'
    },
    {
      title: 'Develop Business Strategy',
      id: 'BUS-3',
      status: 'in-progress',
      points: 8,
    },
    {
      title: 'Develop Marketing Strategy',
      id: 'BUS-4',
      status: 'todo',
      points: 5,
    },
    {
      title: 'Develop marketing plan',
      id: 'BUS-5',
      status: 'todo',
      points: 1,
    },
    {
      title: 'Implement marketing plan',
      id: 'BUS-6',
      status: 'todo',
      points: 4,
    }
  ]