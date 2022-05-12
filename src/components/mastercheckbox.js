import Checkbox from "./checkbox";

export default function MasterCheckbox({ label, selected, onClick }) {
  return (
    <div className="app">
      <Checkbox
        label={label}
        selected={selected}
        onClick={() => onClick(!selected)}
      />
    </div>
  );
}
