document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const _id = urlParams.get("_id");

    const editIcons = document.getElementById('editIcon');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');

    if (_id) {
        // Mode edit
        editIcons.addEventListener('click', function() {
            // Ketika ikon di-klik, form berada dalam mode edit
            editIcons.style.display = 'none';
            usernameInput.removeAttribute('readonly');
            emailInput.removeAttribute('readonly');
        });
    } else {
        // Mode baca saja
        editIcons.style.display = 'none';
        // Atribut readonly di HTML tetap aktif
    }
});