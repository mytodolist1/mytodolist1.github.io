import { sendWhatsAppMessage } from "./sendWA.js";

export function setReminder(date, time, title, phonenumber) {
  const currentDate = new Date().getTime();
  const deadline = new Date(date + " " + time).getTime();

  const alertReminder = deadline - (10 * 60 * 1000);
  const alertDifference = alertReminder - currentDate;

  const alertDifferences = deadline - currentDate;

  // Fungsi untuk menampilkan pesan pada deadline reminder
  const showReminderMessage = () => {
      Swal.fire({
          icon: "info",
          title: "Tugas kamu: " + title,
          text: "Akan masuk deadline dalam 10 menit lagi!",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Baiklah",
      }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire({
                  icon: "info",
                  title: "Silahkan selesaikan atau update tugasnya ya!",
                  showConfirmButton: false,
              });

              // Kirim pesan WhatsApp di sini
              const message = "Tugas kamu: " + title + " \nAkan masuk deadline dalam 10 menit lagi! Jangan lupa selesaikan!";
              sendWhatsAppMessage(phonenumber, message);
          }
      });
  };

  // Fungsi untuk menampilkan pesan setelah melewati deadline
  const showDeadlinePassedMessage = () => {
      Swal.fire({
          icon: "warning",
          title: "Tugas kamu: " + title,
          text: "Sudah melewati deadline!",
          showConfirmButton: false,
      });

      // Kirim pesan WhatsApp di sini
      const message = "Tugas kamu: " + title + " \nSudah melewati deadline! Jangan lupa selesaikan!";
      sendWhatsAppMessage(phonenumber, message);
  };

  // Set timeout untuk reminder 10 menit sebelum deadline
  setTimeout(showReminderMessage, alertDifference);

  // Set timeout untuk pesan setelah melewati deadline
  setTimeout(showDeadlinePassedMessage, alertDifferences);
}
