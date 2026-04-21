import { useState } from 'react';
import Button from './components/Button.jsx';
import ToDoList from './components/ToDoList.jsx';
import ToDoForm from './components/ToDoForm.jsx';
import Stats from './components/Stats.jsx';
import ModalWarning from './components/ModalWarning.jsx';

function App() {
  return (
    <div>
      <h1> TaDa! List </h1>
      <Button />
      <ToDoList />
      <Button />
      <ToDoForm />
      <Stats />
    </div>
  );
}

export default App;
