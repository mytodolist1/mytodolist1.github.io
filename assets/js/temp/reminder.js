export function setReminder(date, time) {
    const currentDate = new Date().getTime();
    const deadline = new Date(date + " " + time).getTime();

    const alertReminder = deadline - (10 * 60 * 1000)
    const alertDifference = alertReminder - currentDate;

    const alertDifferences = deadline - currentDate;

    setTimeout(function() {
        Swal.fire({
            icon: "info",
            title: "10 menit lagi tugasnya masuk deadline nih, jangan lupa selesaikan atau update ya!",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Baiklah",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                icon: "info",
                title: "Silahkan selesaikan atau update tugasnya ya!",
                showConfirmButton: false,
              });
            }
        });
    }, alertDifference);

    setTimeout(function() {
        Swal.fire({
            icon: "warning",
            title: "Sepertinya tugas kamu sudah melewati deadline nih, jangan lupa selesaikan ya!",
            showConfirmButton: false,
        });
    }, alertDifferences);

    // console.log("Current Date:", currentDate);
    // console.log("Deadline:", deadline);
    // console.log("Alert Reminder:", alertReminder);
    // console.log("Alert Difference:", alertDifference);
    // console.log("Alert Differences:", alertDifferences);
}