//build grid
let grid = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,
    15,16,17,18,19,20,21,22,23,24,25,26,27,28,
    29,30,31,32,33,34,35,36,37,38,39,40,41,42,
    43,44,45,46,47,48,49,50,51,52,53,54,55,56,
    57,58,59,60,61,62,63,64];
//declare players
let red = [];
let blue = [];
//define ships
let bcar = [1,2,3,4,5];
let bbs = [1,2,3,4];
let bsub = [1,2,3];
let bcrus = [1,2,3];
let bdes = [1,2];
let rcar = [1,2,3,4,5];
let rbs = [1,2,3,4];
let rsub = [1,2,3];
let rcrus = [1,2,3];
let rdes = [1,2];
let currentplayer = "red";
let gameOver = false;


//select placement
$('.col').click(function() {
    if (gameOver) {
        return
    }
    $this =$(this);
    const cellnum = $this.data("cellnum");
    console.log("player picked " + cellnum)
    //Check to see that square is available
    //this uses a index position of -1 to indicate
    //false
    if (grid.indexOf(cellnum) === -1) {
        messaging("taken");
    }

})
function

function messaging(message) {
    switch (message) {
        case "reset":
            console.log("reset Clicked");
            $('#status').html("New game! X goes first!.");
            break;

        case "winner": 
            console.log ('winner is ' + currentPlayer);
            $('#status').html("Game is over " + currentPlayer + " wins!");             
            break;

        case "flip":
            $('#status').html("Its " + currentPlayer + "'s turn!");  
            break;

        case "taken":
            $('#status').html("That spot is taken.");
            break;

        case "start":
            $('#status').html("New game! X goes first!.");
            break;
        
    }
//make each players  placement  the others  winning  combo
//devide play area  into 7 areas  page  title, grid, then on  right side 3 panels
//avaiable ships,  live ships  and dead enemy ships   
    //game phase 1  set up
        //select ship in  avaialble ships  panel
        //hover over  grid with appropriate shape per ship (use left click to toggle horiz and  vertical)
        //on click decide if the play is legal
        //create array for each ship
        //set color of squares for ships  on each players  screen to green
        //move ship from available to live
        //check for available ships
        //y/n  accept  configuration
        //set each players ship array positions  to  other players winning array solutions
    //game phase 2
        //player clicks  anywhere
        //if  click is  in  any spot in  the other position delete position from array on other palayers  list,  report "hit"
        //check to see if  array for any ship is  empty
        //set border  on  cell to current players  screen  to red??
        //if  array for ship is  empty report which ship and  display in current players  dead  ships  area
        //if array for battleship is  empty  report " you sank my battle ship display game over"



