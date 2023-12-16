export const convertToLocal = (timestamp) => {
    var date = new Date(timestamp);
    var localDate = date.toLocaleDateString();
    var localTime = date.toLocaleTimeString();
    return localDate + ' ' + localTime;
}