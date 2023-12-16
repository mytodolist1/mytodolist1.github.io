export function convertToLocal (timestamp) {
    var date = new Date(timestamp);
    var localDate = date.toLocaleDateString();
    var localTime = date.toLocaleTimeString();
    return localDate + ' ' + localTime;
}

export function format12Hours (time) {
    const date = new Date('2000-01-01T' + time + ':00');
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleString([], options);

    return formattedTime;
}

export function formatDate (datestring) {
    const date = new Date(datestring);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear();

    return month + '/' + day + '/' + year;
}