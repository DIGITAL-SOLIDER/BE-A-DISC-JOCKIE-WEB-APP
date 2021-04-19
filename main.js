song=""
xlw=""
ylw=""
xrw=""
yrw=""
function setup()
{
    canvas=createCanvas(430,430)
    canvas.center();
    flers_mark4_tank = createCapture(VIDEO);
    flers_mark4_tank.hide();

    poseNet = ml5.poseNet(flers_mark4_tank,superBananaLoaded);
    poseNet.on("pose",gotSUPER_BANANA);
}

function superBananaLoaded()
{
    console.log("SUPER BANANA LOADED");
}

function draw()
{
    image(flers_mark4_tank,0,0,430,430);
    fill("pink");
    stroke("pink");
    circle(xlw,ylw,20);
    inNumberYLW = Number (ylw);
    remove_decimals = floor(inNumberYLW);
    volume = remove_decimals/500;
    document.getElementById("vol").innerHTML="VOLUME="+volume;
    song.setVolume(volume);
}

function preload()
{
    song = loadSound("shiroyama.mp3");
}

function fler_courlence_france()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotSUPER_BANANA(result)
{
    if(result.length>0)
    {
        console.log(result);
        xlw = result[0].pose.leftWrist.x;
        ylw = result[0].pose.leftWrist.y;
        xrw = result[0].pose.rightWrist.x;
        yrw = result[0].pose.rightWrist.y;
        console.log("leftWristx= "+ xlw);
        console.log("leftWristy= "+ ylw);
        console.log("rightWristx= "+ xrw);
        console.log("rightWristy= "+ xrw);
    }
}