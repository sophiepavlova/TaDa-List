export default function Button({ className, onClick, text, color }) {
  return (
    <button className={`button ${color} ${className || ''}`} onClick={onClick}>
      {text}
    </button>
  );
}
