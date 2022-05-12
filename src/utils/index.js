export const initCheckboxList = (max) => {
  const checkboxes = [];
  for (let i = 0; i < max; i++) {
    checkboxes.push({
      id: i + 1,
      selected: false,
      label: `Checkbox ${i + 1}`
    });
  }
  return checkboxes;
};
