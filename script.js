document.getElementById('uploadPhoto').addEventListener('change', function (event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const previewImage = document.getElementById('profilePreview');
            previewImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please select a valid image file (jpg, png, etc.)');
    }
});

 