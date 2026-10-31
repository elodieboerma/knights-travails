//8x8 board - rows/columns numbered 0-7
//knight can face any direction
//a single move is 1 square forward/2 to the side or 2 squares forward/1 to the side
//multiple moves are possible from every square
//don't allow any moves to go off the board
//both DFS and BFS can work, but one may get you stuck in an endless cycle
//output what the full path looks like

//creates an adjaceny list for the given square
function calcSquares([x,y]) {
    const possibleMoves = [];
    if (x+1 > 0 && x+1 < 7 && y+2 > 0 && y+2 < 7) {
                possibleMoves.push([x+1,y+2]);
    }
    if (x+2 > 0 && x+2 < 7 && y+1 > 0 && y+1 < 7) {
                possibleMoves.push([x+1,y+2]);
    }
    if (x+2 > 0 && x+2 < 7 && y-1 > 0 && y-1 < 7) {
                possibleMoves.push([x+1,y+2]);
    }
    if (x+1 > 0 && x+1 < 7 && y-2 > 0 && y-2 < 7) {
                possibleMoves.push([x+1,y+2]);
    }
    if (x-1 > 0 && x-1 < 7 && y-2 > 0 && y-2 < 7) {
                possibleMoves.push([x+1,y+2]);
    }
    if (x-2 > 0 && x-2 < 7 && y-1 > 0 && y-1 < 7) {
                possibleMoves.push([x+1,y+2]);
    }
    if (x-2 > 0 && x-2 < 7 && y+1 > 0 && y+1 < 7) {
                possibleMoves.push([x+1,y+2]);
    }
    if (x-1 > 0 && x-1 < 7 && y+2 > 0 && y+2 < 7) {
                possibleMoves.push([x+1,y+2]);
    }
    return possibleMoves;
}

//may be more than one shortest path
function knightMoves(start,end) {

}