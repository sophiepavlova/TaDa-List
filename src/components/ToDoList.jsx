import ToDoItem from './ToDoItem.jsx';

export default function ToDoList({ onToggle, onRemove, text, tasks }) {
  // console.log(tasks);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <ToDoItem
            onToggle={onToggle}
            onRemove={onRemove}
            task={task}
            text={text}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
}
