const hiddenMode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const _id = urlParams.get("_id");

    const editIcon = document.getElementById('editIcon');

    // Dapatkan elemen input berdasarkan ID
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');

    if (_id) {
        editIcon.style.display = 'none';
        usernameInput.readOnly = false;
        emailInput.readOnly = false;
    }
};

window.onload = handleEditMode;
