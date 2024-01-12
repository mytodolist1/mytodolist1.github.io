import { convertFormatDateToStrip, convertToFormat24Hours } from '../temp/timestamp.js';

export const isiData = (results) => {
  // console.log("isiData:", results);
  const dataTodo = [
    {id: "title", path: "data.0.title"},
    {id: "description", path: "data.0.description"},
    {id: "deadline", path: "data.0.deadline"},
    {id: "time", path: "data.0.time"},
    {id: "category", path: "data.0.tags.category"},
  ];


  dataTodo.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
    if (id === "deadline") {
      inputElement.value = convertFormatDateToStrip(value);
    }
    if (id === "time") {
      inputElement.value = convertToFormat24Hours(value);
    }
  });
}

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

  