export default function Button({ className, onClick, text, color, icon }) {
  return (
    <button className={`button ${color} ${className || ''}`} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
