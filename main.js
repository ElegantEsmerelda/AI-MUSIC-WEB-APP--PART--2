song = "";
song1 = "";

function preload()
{
song = loadSound("sucker.mp3");
song1 = loadSound("white whisper.mp3");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(570, 180)

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500)
}

function play()
{
    song.play();
    song1.play();
}

