import Button from './Button';
export default function ToDoItem() {
  return (
    <div>
      <li>
        <label>
          <input type='checkbox' />
          <span>Item</span>
        </label>
      </li>
      <Button />
    </div>
  );
}
