import { useState } from 'react';
import Button from './components/Button.jsx';
import ToDoList from './components/ToDoList.jsx';
import ToDoForm from './components/ToDoForm.jsx';
import Stats from './components/Stats.jsx';
import ModalWarning from './components/ModalWarning.jsx';

function App() {
  return (
    <div className='app'>
      <div className='sidebar'>
        <div className='sidebar-header'>
          <h1> TaDa! List </h1>
          <Button color='button-add' text='+ Add' />
        </div>
        <ToDoList text='remove' />
        <Button color='button-remove align-right' text='clear the list' />
        <ToDoForm text='+ Add' text1='Cancel' />
      </div>
      <Stats />
    </div>
  );
}

export default App;
