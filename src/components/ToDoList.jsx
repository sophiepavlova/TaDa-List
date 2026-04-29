import ToDoItem from './ToDoItem.jsx';

export default function ToDoList({ onToggle, onRemove, text, tasks, icon }) {
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
            icon={icon}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
}
