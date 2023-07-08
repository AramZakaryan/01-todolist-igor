import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type filterValueType = 'All' | 'Active' | 'Completed'

function App() {

    const [tasks1, setTasks1] =
        useState(
            [
                {id: 1, title: "HTML&CSS", isDone: true},
                {id: 2, title: "JS", isDone: true},
                {id: 3, title: "ReactJS", isDone: false},
                {id: 4, title: "Rest API", isDone: false},
                {id: 5, title: "GraphQL", isDone: false}
            ]
        )

    function changeFilter(value: filterValueType) {
        setFilter(value)
    }

    const [filter, setFilter] =
        useState<filterValueType>("All")

    let filtredTasks = tasks1

    if (filter === "Active") {
        filtredTasks = tasks1.filter(el => el.isDone)
    }
    if (filter === "Completed") {
        filtredTasks = tasks1.filter(el => !el.isDone)
    }


    function removeTask(taskId: number) {
        return setTasks1(tasks1.filter(el => el.id !== taskId))
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={filtredTasks}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />

        </div>
    );
}

export default App;
