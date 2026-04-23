import Button from './Button';

export default function ToDoForm({ text, text1, color }) {
  return (
    <form>
      {/* <input
        type='text'
        placeholder='Add a thing you’ve got to do today'
        value=''
      ></input> */}
      <textarea
        placeholder='Add a thing you’ve got to do today'
        value=''
        onInput={(e) => {
          e.target.style.height = 'auto';
          e.target.style.height = e.target.scrollHeight + 'px';
        }}
      />
      <div>
        <Button color='button-add' text={text} />
        <Button color='button-remove' text={text1} />
      </div>
    </form>
  );
}
