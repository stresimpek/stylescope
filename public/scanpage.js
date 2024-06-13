const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');
const captureButton = document.getElementById('capture');

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    video.srcObject = stream;
    video.play();
})
.catch(err => {
    console.error("Error accessing camera: " + err);
});

// Fungsi untuk menangkap foto
captureButton.addEventListener('click', () => {
const context = canvas.getContext('2d');
canvas.width = video.videoWidth;
canvas.height = video.videoHeight;
context.drawImage(video, 0, 0, canvas.width, canvas.height);

// Konversi canvas ke data URL dan tampilkan gambar
const dataUrl = canvas.toDataURL('image/png');
photo.src = dataUrl;
photo.style.display = 'block';
});