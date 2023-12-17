const showDateTimeNow = () => {
    const date = new Date();

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    const dateNow = month + '/' + day + '/' + year;
    const timeNow = hours + ':' + minutes;

    return { dateNow, timeNow };
}

// Pemanggilan fungsi dan penyetelan nilai ke elemen HTML
const { timeNow, dateNow } = showDateTimeNow();
document.getElementById("deadline").value = dateNow;
document.getElementById("time").value = timeNow;


// const showTimeNow = () => {
//     const date = new Date();

//     const hours = ('0' + date.getHours()).slice(-2);
//     const minutes = ('0' + date.getMinutes()).slice(-2);

//     return hours + ':' + minutes;
// }

// document.getElementById("time").value = showTimeNow();

// const showDateNow = () => {
//     const date = new Date();

//     const year = date.getFullYear();
//     const month = ('0' + (date.getMonth() + 1)).slice(-2);
//     const day = ('0' + date.getDate()).slice(-2);

//     return year + '-' + month + '-' + day;
// }

// document.getElementById("deadline").value = showDateNow();