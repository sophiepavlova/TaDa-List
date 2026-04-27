import ToDoItem from './ToDoItem.jsx';

export default function ToDoList({ onRemove, text, tasks }) {
  console.log(tasks);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <ToDoItem onRemove={onRemove} task={task} text={text} key={task.id} />
        ))}
      </ul>
    </div>
  );
}
