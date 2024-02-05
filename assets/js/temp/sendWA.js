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
    const req = new XMLHttpRequest();

    // Menetapkan metode dan URL permintaan
    req.open('POST', url, true);

    // Menetapkan tipe konten permintaan
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader('Token',  token);

    // Menangani perubahan status permintaan
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.status === 200) {
                console.log(JSON.parse(req.responseText));
            } else {
                console.error('Gagal mengirim pesan:', req.status, req.statusText);
            }
        }
    };

    // Mengubah objek data menjadi string JSON
    const jsonData = JSON.stringify(data);

    // Mengirim permintaan dengan data JSON
    req.send(jsonData);
}
