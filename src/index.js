//multiple moves are possible from every square
//both DFS and BFS can work, but one may get you stuck in an endless cycle
//output what the full path looks like

//creates an adjaceny list for the given square
function calcSquares([x,y]) {
    const possibleMoves = [];
    if (x+1 > -1 && x+1 < 8 && y+2 > -1 && y+2 < 8) {
                possibleMoves.push([x+1,y+2]);
    }
    if (x+2 > -1 && x+2 < 8 && y+1 > -1 && y+1 < 8) {
                possibleMoves.push([x+2,y+1]);
    }
    if (x+2 > -1 && x+2 < 8 && y-1 > -1 && y-1 < 8) {
                possibleMoves.push([x+2,y-1]);
    }
    if (x+1 > -1 && x+1 < 8 && y-2 > -1 && y-2 < 8) {
                possibleMoves.push([x+1,y-2]);
    }
    if (x-1 > -1 && x-1 < 8 && y-2 > -1 && y-2 < 8) {
                possibleMoves.push([x-1,y-2]);
    }
    if (x-2 > -1 && x-2 < 8 && y-1 > -1 && y-1 < 8) {
                possibleMoves.push([x-2,y-1]);
    }
    if (x-2 > -1 && x-2 < 8 && y+1 > -1 && y+1 < 8) {
                possibleMoves.push([x-2,y+1]);
    }
    if (x-1 > -1 && x-1 < 8 && y+2 > -1 && y+2 < 8) {
                possibleMoves.push([x-1,y+2]);
    }
    return possibleMoves;
}

//may be more than one shortest path
let allPosPaths = [];
let singlePathOption = [];
function knightMoves(start,end) {
    let posMoves = calcSquares(start);
    const options = [];
    for (let i = 0; i > posMoves.length; i++) {
        options.push(knightMoves(posMoves[i],end));
        singlePathOption.push();
    }
    allPosPaths.push(singlePathOption);
}
