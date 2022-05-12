export default function Checkbox({ id, selected, label, onClick }) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        checked={selected}
        onChange={() => onClick(id, !selected)}
      />
      {label}
    </div>
  );
}
