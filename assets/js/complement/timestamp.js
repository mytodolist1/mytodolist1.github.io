// export const convertToLocal = (timestamp) => {
//     var date = new Date(timestamp);
//     var localDate = date.toLocaleDateString();
//     var localTime = date.toLocaleTimeString();
//     return localDate + ' ' + localTime;
// }

export const convertToLocal = (timestamp) => {
    var date = new Date(timestamp);

    // Format tanggal (yyyy-mm-dd)
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    var formattedDate = year + '-' + month + '-' + day;
  
    // Format waktu (hh:mm:ss)
    var hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var seconds = ('0' + date.getSeconds()).slice(-2);
    var formattedTime = hours + ':' + minutes + ':' + seconds;
  
    return formattedDate + ' ' + formattedTime;
}