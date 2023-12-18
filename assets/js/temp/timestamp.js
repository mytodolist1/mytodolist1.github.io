export function convertToLocal(timestamp) {
    const date = new Date(timestamp);
    const localDate = date.toLocaleDateString();
    const localTime = date.toLocaleTimeString();
    return localDate + ' ' + localTime;
}

export function format12Hours(time) {
    const date = new Date('2000-01-01T' + time + ':00');
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleString([], options);

    return formattedTime;
}

export function formatDate(datestring) {
    const date = new Date(datestring);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear();

    return month + '/' + day + '/' + year;
}

export function convertFormatDateToStrip(inputDate) {
    const [month, day, year] = inputDate.split('/');

    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

export function convertToFormat24Hours(time12Hour) {
    const [time, period] = time12Hour.split(' ');
    const [hour, minute] = time.split(':');
  
    if (period === 'AM') {
      return `${hour.padStart(2, '0')}:${minute}`;
    } else {
      const hour24 = (hour === '12') ? '00' : String(Number(hour) + 12).padStart(2, '0');
      return `${hour24}:${minute}`;
    }
}