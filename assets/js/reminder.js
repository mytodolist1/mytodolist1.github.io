export function setReminder(date, time) {
    const currentDate = new Date().getTime();
    const deadline = new Date(date + " " + time).getTime();

    const alertReminder = deadline - (5 * 60 * 1000)
    const alertDifference = alertReminder - currentDate;

    const timeDifference = deadline - currentDate;

    setTimeout(function() {
        Swal.fire({
            title: "5 menit lagi tugasnya masuk deadline nih, mau perpanjang atau selesaikan aja?",
            icon: "warning",
            // showCancelButton: true,
            confirmButtonColor: "#3085d6",
            denyButtonColor: "#d33",
            confirmButtonText: "Selesaikan",
            denyButtonText: "Perpanjang",
            customClass: {
              confirmButton: "button is-success",
              denyButton: "button is-warning",
            },
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Tugas berhasil diselesaikan",
                icon: "success",
                showConfirmButton: false,
              });

            } else if (result.isDenied) {
              Swal.fire({
                title: "Silahkan perpanjang tugasnya",
                icon: "warning",
                showConfirmButton: false,
              }).then(() => {
                window.location.href = "edit.html";
              });

            } else {
                Error("Error: " + result);
            }
          });
    }, alertDifference);

    console.log("Selisih waktu total: " + timeDifference);
}