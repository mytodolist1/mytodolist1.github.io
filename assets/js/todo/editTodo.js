import { convertFormatDateToStrip, convertToFormat24Hours } from '../temp/timestamp.js';

export const isiData = (results) => {
  const dataTodo = [
    {id: "title", path: "data.title"},
    {id: "description", path: "data.description"},
    {id: "deadline", path: "data.deadline"},
    {id: "time", path: "data.time"},
    {id: "category", path: "data.tags.category"},
    {id: "filePreview", path: "data.file"},
  ];

  dataTodo.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    
    if (id === "filePreview") {
      inputElement.innerHTML = `<embed src="${value}" id="fileupdate" type="application/pdf" alt="Preview File" style="width: 600px; height: 580px;">`;
    } else if (id === "deadline") {
      setupCalendarInput(inputElement, value);
    } else if (id === "time") {
      inputElement.value = convertToFormat24Hours(value);
    } else {
      inputElement.value = value;
    }
  });
}

const setupCalendarInput = (inputElement, value) => {
  inputElement.value = convertFormatDateToStrip(value);

  const currentDate = new Date().toISOString().split("T")[0];
  inputElement.min = currentDate;

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  inputElement.max = maxDate.toISOString().split("T")[0];
};

const getNestedValue = (obj, path, index, property) => {
  const value = path
    .split(".")
    .reduce((value, key) => (value && value[key] !== undefined ? value[key] : ""), obj);

  if (
    Array.isArray(value) &&
    value.length > index &&
    value[index].hasOwnProperty(property)
  ) {
    return value[index][property];
  }

  return value;
};

  