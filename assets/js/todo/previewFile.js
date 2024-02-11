document.getElementById("fileInput").addEventListener("change", function() {
    var input = this;
    var preview = document.getElementById('filePreview');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            preview.innerHTML = '<embed src="' + e.target.result + '" id="fileupdate" type="application/pdf" alt="Preview File" style="width: 600px; height: 580px;">';
        };

        reader.readAsDataURL(input.files[0]);
    }
});