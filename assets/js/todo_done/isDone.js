import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const doneTodo = async (DONE) => {
  const _id = DONE;
  const token = getCookie("Authorization");

  const isConfirmed = await Swal.fire({
    title: "Benarkah anda ingin menyelesaikan task ini?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Benar",
    cancelButtonText: "Tidak",
  });

  if (isConfirmed.isConfirmed) {
    console.log("Confirmed:", isConfirmed.isConfirmed);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    // const target_url = "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-tododone?_id=" + _id;
    const target_url = "https://vercel-go-sandy.vercel.app/todo/clear?_id=" + _id;

    try {
      const response = await fetch(target_url, {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      });

      if (response.ok) {
        console.log("response:", response);
        await Swal.fire({
          icon: "success",
          title: "Task berhasil diseelsaikan",
          text: response.message,
          showConfirmButton: false,
        });
        location.reload();
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

window.doneTodo = doneTodo;