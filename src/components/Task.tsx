import styles from './Task.module.css';
import {Trash, CheckCircle} from "phosphor-react";
import {ITask} from "../App";

interface setProps {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({ tasks, onDelete, onComplete }: setProps) {

    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(tasks.id)} >
                {tasks.isCompleted ? <CheckCircle size={20} /> : <div />}
            </button>
            <p className={tasks.isCompleted ? styles.textCompleted : ""}>
                {tasks.title}
            </p>
            <button className={styles.deleteButton} onClick={() => onDelete(tasks.id)}> <Trash size={20}/></button>
        </div>
    )
}