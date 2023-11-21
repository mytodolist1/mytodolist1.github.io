document.addEventListener('DOMContentLoaded', function () {
    const datepickerInput = document.getElementById('datepicker');
  
    // Inisialisasi datepicker menggunakan Pikaday
    const picker = new Pikaday({
      field: datepickerInput,
      format: 'MMMM-DD-YY', // Format tanggal (YYYY-MM-DD)
      // Opsi lainnya dapat ditambahkan sesuai kebutuhan
    });
  });
  