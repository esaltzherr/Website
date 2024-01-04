let characterImg;
let characterX, characterY;
let characterSpeed = 5;

function preload() {
    characterImg = loadImage('images/pixel_art_cute_small_ghost.png'); // Replace with your image path
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight); // Adjust size to window
    canvas.parent('p5-canvas');
    characterX = width / 2;
    characterY = height / 2;
}

function draw() {
    clear(); // This will clear the canvas and make the background transparent
    image(characterImg, characterX, characterY, 50, 50); // Adjust size as needed

    if (keyIsDown(65)) {  // A key
        characterX -= characterSpeed;
    }
    if (keyIsDown(68)) {  // D key
        characterX += characterSpeed;
    }
    if (keyIsDown(87)) {  // W key
        characterY -= characterSpeed;
    }
    if (keyIsDown(83)) {  // S key
        characterY += characterSpeed;
    }
}
