let activePhoto = document.querySelector('.active-photo');
let previewPhotos = document.querySelectorAll('.preview-list a');

for (let previewPhoto of previewPhotos) {
    previewPhoto.onclick = function (evt) {
        evt.preventDefault();
        activePhoto.src = previewPhoto.href;
        let currentActivePhoto = document.querySelector('.preview-list .active-item');
        currentActivePhoto.classList.remove('active-item');
        previewPhoto.classList.add('active-item');
    };
};