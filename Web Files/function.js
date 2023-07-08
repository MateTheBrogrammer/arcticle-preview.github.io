const shareButton = document.getElementById("shareButton");
const clickedDisplay = document.getElementById("clickedDisplay");
const activeButton = document.getElementById('flexDisplayShare');

shareButton.addEventListener('click', function() {
    clickedDisplay.style.display = clickedDisplay.style.display === 'none' ? 'block' : 'none';
});

