export const isiData = (results) => {
    const dataUser = [
      {id: "username1", path: "data.0.username"},
      {id: "email", path: "data.0.email"},
    ];

    console.log(results);
  
    dataUser.forEach(({ id, path, index, property }) => {
      console.log(`Updating element with ID ${id} with data from path ${path}`);
      const value = getNestedValue(results, path, index, property);
      const element = document.getElementById(id);
      element.value = value;
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