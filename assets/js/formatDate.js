export const formatDate = (inputValue) => {
    let date;

    if (inputValue) {
        date = new Date(inputValue);
    } else {
        date = new Date();
    }

    return `${date.getDate().toString().padStart(2, '0')}/
    ${(date.getMonth() + 1).toString().padStart(2, '0')}/
    ${date.getFullYear()}`;
};