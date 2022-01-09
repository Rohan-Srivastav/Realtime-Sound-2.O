song = "";

function preload(){

    HarryPotter = loadSound("Harry Potter.mp3");
    HarryPotterRemix = loadSound("music.mp3");
    WarRobots = loadSound("War Robots.mp3");
    Christmas = loadSound("Christmas.mp3");
} 


function  setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}



function play(){

    s_name = document.getElementById("song_name").value;

    if(s_name == "Harry Potter"){
        HarryPotter.play();
        
        HarryPotterRemix.stop();
        WarRobots.stop();
        Christmas.stop();
    }
    else if(s_name == "Harry PotterMix"){
        HarryPotterRemix.play();

        HarryPotter.stop();
        WarRobots.stop();
        Christmas.stop();
    }

    else if(s_name == "War Robots"){
       WarRobots.play();

        HarryPotter.stop();
        HarryPotterRemix.stop();
      Christmas.stop();
    }

    else if(s_name == "Christmas"){
        Christmas.play();

        HarryPotter.stop();
        HarryPotterRemix.stop();
        WarRobots.stop();
    }

   
}

function stop(){

    if(s_name == "Harry Potter"){
        HarryPotter.stop();
        HarryPotterRemix.stop();
        WarRobots.stop();
        Christmas.stop();
    }
    else if(s_name == "Harry PotterMix"){
        HarryPotterRemix.stop();
        HarryPotter.stop();
        WarRobots.stop();
        Christmas.stop();
    }

    else if(s_name == "War Robots"){
        WarRobots.stop();
        HarryPotter.stop();
        HarryPotterRemix.stop();
        Christmas.stop();
    }
    
    else if(s_name == "Christmas"){
        Christmas.stop();
        WarRobots.stop();
        HarryPotter.stop();
        HarryPotterRemix.stop();
    }



}
