import { useState } from 'react';

export function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: 'Adicione sua primeira tarefa',
    },
  ]);

  function addTask() {
    if (newTask) {
      if (tasks[0].task === 'Adicione sua primeira tarefa') {
        tasks.shift();
      }
      const newObject = [...tasks, { id: tasks.length, task: newTask }];
      setTasks(newObject);
    }
  }

  return (
    <>
      <header>
        <h1>Notes</h1>
        <span>Versão 1</span>
      </header>

      <main>
        <div>
          <input
            type='text'
            placeholder='Suas tarefas'
            onChange={(event) => setNewTask(event.currentTarget.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        {tasks.map((t, value) => (
          <li key={value}>{t.task}</li>
        ))}
      </main>
    </>
  );
}
