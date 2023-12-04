export const isiData = (results) => {
    const dataUser = [
      {id: "username", path: "data.0.username"},
      {id: "email", path: "data.0.email"},
    ];
  
    // console.log("isiData - Input:", results);
  
    dataUser.forEach(({ id, path, index, property }) => {
    //   const inputElement = document.getElementById(id);
      console.log(`Updating element with ID ${id} with data from path ${path}`);
      const value = getNestedValue(results, path, index, property);
    //   console.log(`Setting value for ${id}:`, value);
      inputElement.value = value;
    });
  }
  
  const getNestedValue = (obj, path, index, property) => {
    // console.log("getNestedValue - Input:", obj, path, index, property);
    const value = path
      .split(".")
      .reduce((value, key) => (value && value[key] !== undefined ? value[key] : ""), obj);
  
    // console.log("getNestedValue - Intermediate Value:", value);
  
    if (
      Array.isArray(value) &&
      value.length > index &&
      value[index].hasOwnProperty(property)
    ) {
      return value[index][property];
    }
  
    return value;
  };
  
    