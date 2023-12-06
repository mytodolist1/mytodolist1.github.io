// formatDate.js

// Module untuk memformat tanggal
export const formatDate = (dateString) => {
    let deadlineDate;

    // Cek apakah input tanggal tidak kosong
    if (dateString) {
        deadlineDate = new Date(dateString);
    } else {
        // Jika kosong, gunakan tanggal saat ini
        deadlineDate = new Date();
    }

    // Gunakan modul formatDate untuk memformat tanggal
    return `${deadlineDate.getFullYear()}-${(deadlineDate.getMonth() + 1).toString().padStart(2, '0')}-${deadlineDate.getDate().toString().padStart(2, '0')}`;
};
