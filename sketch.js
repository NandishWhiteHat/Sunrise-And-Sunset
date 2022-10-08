const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;


function preload() {
    getBackgroundImg();

}

function setup() {
    var canvas = createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;

}

function draw() {
    if (backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    //Time : 12 PM
    if (hour >= 12) { //possible values of hour = 12,13,14,15,16,17,18,19,20,21,22,23,
        text("Time : " + hour + " PM", 50, 100);
    } else if (hour == 0) { //possible values of hour = 0
        text("Time : 12 AM", 100, 100);
    } else { //possible values of hour = 1,2,3,4,5,6,7,8,9,10,11
        text("Time : " + hour + " AM", 50, 100);
    }

}

async function getBackgroundImg() {

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");

    //change the data in JSON format and store it in variable responseJSON
    var responseJSON = await response.json();


    //fetch datetime from responseJSON
    var datetime = responseJSON.datetime;
    console.log(datetime);

    // slice the datetime to extract hour
    hour = datetime.slice(11, 13);

    if (hour >= 0 && hour < 18) {
        bg = "sunrise.png";
    }
    else {
        bg = "sunset.png"
    }

    backgroundImg = loadImage(bg);
}

