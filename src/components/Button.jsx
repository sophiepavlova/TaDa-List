export default function Button({ text, color }) {
  return <button className={`button ${color}`}>{text}</button>;
}
