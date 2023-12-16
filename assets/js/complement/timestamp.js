export const convertToLocal = (timestamp) => {
    const date = new Date(timestamp);

    // Format tanggal (yyyy-mm-dd)
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const formattedDate = year + '-' + month + '-' + day;
  
    // Format waktu (hh:mm:ss)
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const formattedTime = hours + ':' + minutes + ':' + seconds;
  
    return formattedDate + ' ' + formattedTime;
}

export const format12Hours = (time) => {
    const date = new Date('2000-01-01T' + time + ':00');
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleString([], options);

    return formattedTime;
}

export const formatDate = (datestring) => {
    const date = new Date(datestring);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear();

    return month + '/' + day + '/' + year;
}