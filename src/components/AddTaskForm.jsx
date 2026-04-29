import { useState } from 'react';
import Button from './Button';

export default function AddTaskForm({
  onClick,
  onAddTask,
  formIsHidden,
  text,
  text1,
  color,
}) {
  const [curTaskMessage, setCurTaskMessage] = useState('');
  function handleSubmit(e) {
    if (!curTaskMessage) return;
    e.preventDefault();
    console.log('hi');
    const newTask = {
      id: crypto.randomUUID(),
      name: curTaskMessage,
      completed: false,
    };
    console.log(newTask);
    onAddTask(newTask);
    setCurTaskMessage('');
  }
  // console.log(`formIsHidden: ${formIsHidden}`);
  return (
    <>
      {!formIsHidden && (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder='Add a thing you’ve got to do today'
            value={curTaskMessage}
            onChange={(e) => setCurTaskMessage(e.target.value)}
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
          />
          <div>
            <Button color='button-add' onClick={handleSubmit} text={text} />
            <Button onClick={onClick} color='button-clear' text={text1} />
          </div>
        </form>
      )}
    </>
  );
}
