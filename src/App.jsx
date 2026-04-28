import { useState } from 'react';
import Button from './components/Button.jsx';
import ToDoList from './components/ToDoList.jsx';
import AddTaskForm from './components/AddTaskForm.jsx';
import Stats from './components/Stats.jsx';
import ModalWarning from './components/ModalWarning.jsx';

const initialTasks = [
  {
    id: 1,
    name: 'Do the tai chi',
    completed: false,
  },
  {
    id: 2,
    name: 'Watch The Boys Watch The Boys Watch The Boys Watch The Boys Watch The Boys Watch The Boys Watch The Boys',
    completed: false,
  },
  {
    id: 3,
    name: 'Do the laundry',
    completed: true,
  },
];

function App() {
  const [task, setTask] = useState([]);
  const [tasks, setTasks] = useState([...initialTasks]);
  const [formIsHidden, setFormIsHidden] = useState(true);
  const [modalIsOpen, setModaiIsOpen] = useState(false);

  const allTasksCounter = tasks.length;
  let tasksCheckedCounter = 0;
  tasks.forEach(
    (task) =>
      (tasksCheckedCounter =
        task.completed === true
          ? tasksCheckedCounter + 1
          : tasksCheckedCounter),
  );
  // console.log(tasksCheckedCounter);

  function handleAddTask(newTask) {
    setTask(newTask);
    setTasks((tasks) => [...tasks, newTask]);
  }

  function handleToggleForm() {
    console.log(formIsHidden);
    formIsHidden ? setFormIsHidden(false) : setFormIsHidden(true);
  }

  function handleRemoveTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleClearList() {
    setTasks([]);
    setModaiIsOpen(false);
  }

  function handleToggleCheckbox(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }
  function handleModalOpen() {
    setModaiIsOpen(true);
  }
  function handleModalClose() {
    setModaiIsOpen(false);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <div className='sidebar-header'>
          <h1> TaDa! List </h1>
          <Button
            className={`${!formIsHidden ? 'hide' : ''}`}
            onClick={handleToggleForm}
            color='button-add'
            text='+ Add'
          />
        </div>
        {tasks.length === 0 && (
          <p className='greating'>Time to start your tada! list?</p>
        )}
        <ToDoList
          onToggle={handleToggleCheckbox}
          onRemove={handleRemoveTask}
          task={task}
          tasks={tasks}
          text='remove'
        />
        {modalIsOpen && (
          <div className='modal-overlay'>
            <div className='modal'>
              <p className='warning'>Are you sure? The list will be empty.</p>
              <div className='modal-buttons'>
                <Button
                  className='cancel'
                  onClick={handleModalClose}
                  color='button-add'
                  text='Cancel'
                />
                <Button
                  onClick={handleClearList}
                  className={`${tasks.length === 0 ? 'hide' : ''}`}
                  color='button-remove align-right'
                  text='clear the list'
                />
              </div>
            </div>
          </div>
        )}
        {!modalIsOpen && (
          <Button
            onClick={handleModalOpen}
            className={`${tasks.length === 0 ? 'hide' : ''}`}
            color='button-remove align-right'
            text='clear the list'
          />
        )}
        <AddTaskForm
          onClick={handleToggleForm}
          onAddTask={handleAddTask}
          formIsHidden={formIsHidden}
          text='+ Add'
          text1='Cancel'
        />
      </div>
      <Stats
        allTasksCounter={allTasksCounter}
        tasksCheckedCounter={tasksCheckedCounter}
      />
    </div>
  );
}

export default App;
