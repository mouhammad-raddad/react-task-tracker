import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'docttor apointment',
      day: 'feb 7th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'sdafs apointment',
      day: 'feb 4th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'sadff apointment',
      day: 'feb 24th at 2:30pm',
      reminder: true,
    },
    {
      id: 4,
      text: 'docasdfsdfttor apointment',
      day: 'feb 13th at 2:30pm',
      reminder: true,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTasks(!showAddTasks)}
        showAdd={showAddTasks}
      />
      {showAddTasks && <AddTask onAdd={addTask} />}{' '}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
