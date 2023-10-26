import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

// Fungsi untuk memeriksa sesi dan mengarahkan pengguna
function checkSessionAndRedirect() {
  const token = getCookie("token");

  if (token) {
    // Token ditemukan, pengguna tetap di dashboard
    window.location.href = "index.html"; // Ganti "dashboard.html" dengan URL halaman dashboard yang sesuai
  } else {
    // Token tidak ditemukan, arahkan ke halaman login
    window.location.href = "login.html"; // Ganti "login.html" dengan URL halaman login yang sesuai
  }
}

// Panggil fungsi ini saat halaman dimuat
window.onload = checkSessionAndRedirect;
