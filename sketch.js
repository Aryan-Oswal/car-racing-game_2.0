var GameState = 0;
var playerCount , database , form , player , game;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

    game = new Game()
    game.getState()
    game.Start()
}

function draw(){
    
}



