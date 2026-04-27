import Button from './Button';
export default function ToDoItem({ onRemove, text, task }) {
  return (
    <div className='item'>
      <li>
        <label>
          <input type='checkbox' />
          <span>{task.name}</span>
        </label>
      </li>
      <Button
        onClick={() => onRemove(task.id)}
        color='button-remove'
        text={text}
      />
    </div>
  );
}
