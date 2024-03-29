const showDateTimeNow = () => {
    const date = new Date();

    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear();

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    const dateNow = year + '-' + month + '-' + day;
    const timeNow = hours + ':' + minutes;

    return { dateNow, timeNow };
}

const { timeNow, dateNow } = showDateTimeNow();

document.getElementById("deadline").value = dateNow;
document.getElementById("time").value = timeNow;
