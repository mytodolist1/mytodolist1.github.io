function openPDFWindow(pdfUrl) {
  if (pdfUrl === "undefined") {
    // Jika #FILE1# tidak terdefinisi, tampilkan alert
    alert("File tidak tersedia.");
  } else {
    // Tentukan ukuran jendela baru
    var width = 600;
    var height = 400;
    // Hitung posisi tengah jendela
    var left = 0;
    var top = 0;
    // Konfigurasikan parameter jendela
    var options = 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left;
    // Buka dokumen dalam jendela baru dengan ukuran kecil
    window.open(pdfUrl, "PDF_Window", options);
  }
}

window.openPDFWindow = openPDFWindow;
