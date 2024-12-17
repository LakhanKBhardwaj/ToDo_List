import React, { FC } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

type Todo = {
    _id: string;
    task: string;
    completed: boolean;
  };

export const TodoList: FC = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {

        }
        fetchTodos();
    },[])

    const handleAddTodo = async () => {
        if (!task) return;

        const result = await axios.post('http://localhost:5000/api/todos', { task });
        setTodos([...todos, result.data]);
        setTask('');
    };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.task} {todo.completed ? '✓' : '✗'}
          </li>
        ))}
      </ul>
    </div>
  )
}
