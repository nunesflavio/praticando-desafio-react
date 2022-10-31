import styles from './Header.module.css';
import todoLogo from '../assets/Logo-td.svg'
import {PlusCircle} from "phosphor-react";
import {ChangeEvent, FormEvent, useState} from "react";

interface setProps {
    onHandleAddTask: (taskTitle: string) => void;
}

export function Header({ onHandleAddTask }: setProps) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onHandleAddTask(title);
        setTitle("");
    }

    function handleChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);

    }
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="ToDO"/>

            <form className={styles.newTaskF} onSubmit={handleSubmit}>
                <input placeholder="Adicione uma nova tarefa" onChange={handleChangeTitle} value={title}/>
                <button>Criar <PlusCircle size={20} />

                </button>
            </form>
        </header>
    )
}