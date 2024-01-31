export function sendWhatsAppMessage(phonenumber, message) {
    const token = "v4.public.eyJleHAiOiIyMDI0LTAyLTE5VDIxOjA3OjM2WiIsImlhdCI6IjIwMjQtMDEtMjBUMjE6MDc6MzZaIiwiaWQiOiI2MjgyMzE3MTUwNjgxIiwibmJmIjoiMjAyNC0wMS0yMFQyMTowNzozNloiff1YQuHHPwSzGpisAMb9rTLP58-jCqtByzePJACBLghprkq2HXtTSbVTShc49m3GIVkU42VSl8uSGme8c4vXnQc";
    const url = 'https://api.wa.my.id/api/send/message/text';

    // Data yang akan dikirimkan dalam format JSON
    const data = {
        to: phonenumber,
        isgroup: false,
        messages: message
    };

    // Membuat objek XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Menetapkan metode dan URL permintaan
    xhr.open('POST', url, true);

    // Menetapkan tipe konten permintaan
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Token', token);

    // Menangani perubahan status permintaan
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText));
            } else {
                console.error('Gagal mengirim pesan:', xhr.status, xhr.statusText);
            }
        }
    };

    // Mengubah objek data menjadi string JSON
    const jsonData = JSON.stringify(data);

    // Mengirim permintaan dengan data JSON
    xhr.send(jsonData);
}
