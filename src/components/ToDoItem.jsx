import Button from './Button';
export default function ToDoItem({ text }) {
  return (
    <div className='item'>
      <li>
        <label>
          <input type='checkbox' />
          <span>Item</span>
        </label>
      </li>
      <Button color='button-remove' text={text} />
    </div>
  );
}
