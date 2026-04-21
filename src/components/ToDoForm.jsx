import Button from './Button';

export default function ToDoForm() {
  return (
    <form>
      <input
        type='text'
        placeholder='Add a thing you’ve got to do today'
        value=''
      ></input>
      <Button />
      <Button />
    </form>
  );
}
