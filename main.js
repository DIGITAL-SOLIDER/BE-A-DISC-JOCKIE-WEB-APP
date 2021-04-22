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
    volume = floor(remove_decimals/430);
    document.getElementById("vol").innerHTML="VOLUME="+volume;
    song.setVolume(volume);

    circle(xrw,yrw,20)
    if (yrw>0 && yrw<=86)
    {
        document.getElementById("ssspppeeeddd").innerHTML="SPEED=0.5x";
        song.rate(0.5);
    }else if (yrw>86 && yrw<=172)
    {
        document.getElementById("ssspppeeeddd").innerHTML="SPEED=1x";
        song.rate(1);
    }else if (yrw>172 && yrw<=258)
    {
        document.getElementById("ssspppeeeddd").innerHTML="SPEED=1.5x";
        song.rate(1.5);
    }else if (yrw>258 && yrw<=344)
    {
        document.getElementById("ssspppeeeddd").innerHTML="SPEED=2x";
        song.rate(2);
    }else if (yrw>344 && yrw<=430)
    {
        document.getElementById("ssspppeeeddd").innerHTML="SPEED=2.5x";
        song.rate(2.5);
    }

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

