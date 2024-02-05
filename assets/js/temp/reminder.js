import { sendWhatsAppMessage } from "./sendWA.js";

export function setReminder(date, time, title, phonenumber, username) {
  const currentDate = new Date().getTime();
  const deadline = new Date(date + " " + time).getTime();

  const alertReminder = deadline - (10 * 60 * 1000);
  const alertDifference = alertReminder - currentDate;

  const alertDifferences = deadline - currentDate;

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

              const message = `Halo User *${username}* \nTugas kamu: *${title}* \n\nAkan masuk deadline dalam 10 menit lagi! Jangan lupa selesaikan!`;
              sendWhatsAppMessage(phonenumber, message);
          }
      });
  };

  const showDeadlinePassedMessage = () => {
      Swal.fire({
          icon: "warning",
          title: "Tugas kamu: " + title,
          text: "Sudah melewati deadline!",
          showConfirmButton: false,
      });

      const message = `Halo User *${username}* \nTugas kamu: *${title}* \n\nSudah melewati deadline! Jangan lupa selesaikan!`;
      sendWhatsAppMessage(phonenumber, message);
  };

  setTimeout(showReminderMessage, alertDifference);
  setTimeout(showDeadlinePassedMessage, alertDifferences);
}
