import { useState } from "react";
import Checkbox from "./components/checkbox";
import MasterCheckbox from "./components/mastercheckbox";
import "./styles.scss";
import { initCheckboxList } from "./utils";

export default function App() {
  const [checkboxList, setCheckboxList] = useState(initCheckboxList(12));
  const handleCheckboxSelect = (id, value) => {
    const existingList = [...checkboxList];
    const checkbox = existingList.find((x) => x.id === id);
    if (checkbox) {
      checkbox.selected = value;
    }
    setCheckboxList(existingList);
  };

  const handleMasterCheckboxSelect = (selected) => {
    const existingList = [...checkboxList];
    existingList.forEach((x) => (x.selected = selected));
    setCheckboxList(existingList);
  };

  return (
    <div className="app">
      <MasterCheckbox
        label="Select all"
        selected={checkboxList.every((x) => x.selected)}
        onClick={handleMasterCheckboxSelect}
      />
      <div className="checkbox-container">
        {checkboxList.map((x) => {
          const { selected, label, id } = x;
          return (
            <Checkbox
              key={id}
              id={id}
              selected={selected}
              label={label}
              onClick={handleCheckboxSelect}
            />
          );
        })}
      </div>
    </div>
  );
}
