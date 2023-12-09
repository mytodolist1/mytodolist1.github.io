export function setReminder(date, time) {
    const currentDate = new Date().getTime();
    const deadline = new Date(date + " " + time).getTime();

    const alertReminder = deadline - (5 * 60 * 1000)
    const alertDifference = alertReminder - currentDate;

    const timeDifference = deadline - currentDate;

    setTimeout(function() {
        Swal.fire({
            title: "5 menit lagi tugasnya masuk deadline nih, jangan lupa selesaikan ya!",
            icon: "warning",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Baiklah",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Silahkan selesaikan tugasnya ya!",
                icon: "success",
                showConfirmButton: false,
              });
            }
        });
    }, alertDifference);

    console.log("Selisih waktu total: " + timeDifference);
}