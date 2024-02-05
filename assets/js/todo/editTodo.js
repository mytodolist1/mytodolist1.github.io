import { convertFormatDateToStrip, convertToFormat24Hours } from '../temp/timestamp.js';

export const isiData = (results) => {
  // console.log("isiData:", results);
  const dataTodo = [
    {id: "title", path: "data.0.title"},
    {id: "description", path: "data.0.description"},
    {id: "deadline", path: "data.0.deadline"},
    {id: "time", path: "data.0.time"},
    {id: "category", path: "data.0.tags.category"},
    {id: "filePreview", path: "data.0.file"},
  ];

  console.log("isiData:", results);


  dataTodo.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    
    if (id === "filePreview") {
      inputElement.innerHTML = `<embed src="${value}" type="application/pdf" alt="Preview File" style="width: 600px; height: 580px;">`;
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

  // Set the minimum date to the current date
  const currentDate = new Date().toISOString().split("T")[0];
  inputElement.min = currentDate;

  // Set the maximum date to a reasonable future date (adjust as needed)
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

  