import styles from './Tasks.module.css';
import {ClipboardText} from "phosphor-react";
import {Task} from "./Task";
import { ITask } from "../App";

//propriedades component post
interface setProps {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: setProps) {

    const taskQuantity = tasks.length;
    const completedTasks = tasks.filter((tasks) => tasks.isCompleted).length;

    return (
      <section className={styles.tasks}>
          <header className={styles.header}>
              <div>
                  <p>tarefas criadas</p>
                  <span>{taskQuantity}</span>
              </div>
              <div>
                  <p className={styles.textPurple}>Concuidas</p>
                  <span>{completedTasks} de {taskQuantity}</span>
              </div>
          </header>
          <div className={styles.list}>
              {tasks.map((task) => (
                  <Task key={tasks.id} tasks={task} onDelete={onDelete} onComplete={onComplete} />
              ))}

              {tasks.length <= 0 && (
                  <section className={styles.empty}>
                      <ClipboardText size={50} />
                      <div>
                          <p>Voce ainda nao tem tarefas cadastradas</p>
                          <span>Crie tarefas e organize seus itnes a fazer</span>
                      </div>
                  </section>
              )}

          </div>
      </section>

    );
}