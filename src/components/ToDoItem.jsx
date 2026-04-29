import Button from './Button';
export default function ToDoItem({ onToggle, onRemove, text, task, icon }) {
  return (
    <div className='item'>
      <li>
        {/* <label>
          <input
            type='checkbox'
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span>{task.name}</span>
        </label> */}

        <label className='todo-check'>
          <input
            type='checkbox'
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span className='custom-checkbox'></span>
          <span
            className={task.completed ? 'task-text completed' : 'task-text'}
          >
            {task.name}
          </span>
        </label>
      </li>
      <Button
        onClick={() => onRemove(task.id)}
        color='button-remove'
        icon={icon}
      />
    </div>
  );
}
