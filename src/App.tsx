import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import './global.css';

export interface ITask {
    id: string;
    title: string;
    isCompleted: boolean;
}

export function App() {

    const [tasks, setTasks] = useState<ITask[]>([]);

    function handleAddTask(taskTitle: string) {
        setTasks([
            ...tasks,
            {
                id: uuidv4(),
                title: taskTitle,
                isCompleted: false
            }

        ]);
    }

    function handleDeleteTask(taskId: string) {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    }

    function toggleTaskCompleteById(taskId: string) {
        const newTasks = tasks.map((task) => {
           if (task.id === taskId) {
               return {
                   ...task,
                   isCompleted: !task.isCompleted,
               };
           }
           return task;

        });

        setTasks(newTasks);

    }

    return (
       <>
           <Header onHandleAddTask={handleAddTask} />
           <Tasks tasks={tasks} onDelete={handleDeleteTask}
                  onComplete={toggleTaskCompleteById}
           />
       </>
    )
}
