import ToDoItem from './ToDoItem.jsx';

export default function ToDoList({ text }) {
  return (
    <div>
      <ul>
        <ToDoItem text={text} />
        <ToDoItem text={text} />
        <ToDoItem text={text} />
      </ul>
    </div>
  );
}
