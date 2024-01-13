import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";

const deleteUser = async () => {
  const username = getValue("username");
  const token = getCookie("Authorization");

  const isConfirmed = await Swal.fire({
    title: "Benarkah anda ingin menghapus akun ini?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Benar",
    cancelButtonText: "Tidak",
  });

  if (isConfirmed.isConfirmed) {
    // console.log("Confirmed:", isConfirmed.isConfirmed);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    const target_url =
      "https://asia-southeast2-mytodolist-402507.cloudfunctions.net/mytodolist-user?username=" + username;

    try {
      const response = await fetch(target_url, {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      });

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "Akun berhasil dihapus",
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

window.deleteUser = deleteUser;