const images = [
"0.jpeg", "1.jpeg", "3.jpg", "4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`; 