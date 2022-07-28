// TODO: Declare any global variables we need
let headsCount = 0;
let tailsCount = 0;
let total = 0;
let headsPct = 0;
let tailsPct = 0;
let results = "";
document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip and clear buttons
    //Start with the flip button
    document.getElementById("flip-penny").addEventListener("click", function(e){
        //0 - .5 => heads, 0.51 - 1 => tails
        total ++;
        results = Math.random();
        console.log(results);
        if (results <= 0.5) {
            headsCount ++;
            document.getElementById("penny-image").src="assets/images/penny-heads.jpg"
            document.getElementById("message").textContent = "You flipped heads!"
        } else {
            tailsCount ++;
            document.getElementById("penny-image").src="assets/images/penny-tails.jpg"
            document.getElementById("message").textContent = "You flipped tails!"
        }
        headsPct = (headsCount/total)*100;
        tailsPct = (tailsCount/total)*100;
        console.log(headsPct, headsCount, tailsCount);
        
            document.getElementById("heads").textContent = `${headsCount}`
            document.getElementById("heads-percent").textContent = `${headsPct}`
            document.getElementById("tails").textContent = `${tailsCount}`
            document.getElementById("tails-percent").textContent = `${tailsPct}`
   
        })
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
        document.getElementById("clear-score").addEventListener("click", function(e){
             headsCount = 0;
             tailsCount = 0;
             total = 0;
             headsPct = 0;
             tailsPct = 0;
             results = "";

        document.getElementById("heads").textContent = `${headsCount}`;
        document.getElementById("heads-percent").textContent = `${headsPct}`;
        document.getElementById("tails").textContent = `${tailsCount}`;
        document.getElementById("tails-percent").textContent = `${tailsPct}`+"%";
        })
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
    })