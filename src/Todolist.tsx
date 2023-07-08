import React from 'react';
import {filterValueType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (value: filterValueType) => void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map(el => {
                return (
                    <li>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title} </span>
                        <button onClick={() => {
                            props.removeTask(el.id);
                        }}>✖
                        </button>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={()=>props.changeFilter('All')}>All</button>
            <button onClick={()=>props.changeFilter('Active')}>Active</button>
            <button onClick={()=>props.changeFilter('Completed')}>Completed</button>
        </div>
    </div>
}
