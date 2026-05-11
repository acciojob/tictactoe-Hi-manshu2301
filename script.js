//your JS code here. If required.
let player1="";
let player2="";
let currentPlayer="x";
let board = ["","","","","","","","",""];
const winPatterns = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];
const submitBtn= document.getElementById("submit");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");
submitBtn.addEventListener("click",function() {
	player1 = document.getElementById("player1").value;
	player2 = document.getElementById("player2").value;

	document.getElementById("game").style.display="block";
	message.textContent = `${player1}, you're up`;
});
cells.forEach((cell,index)=>{
	cell.addEventListener("click",function(){
		if(board[index] !== ""){
			return;
		}
		if(currentPlayer==="x"){
			cell.textContent = "x";
			board[index]="x";
		}else{
			cell.textContent = "o";
			board[index]="o";
		}
		if(checkWinner()){
			let winnerName = currentPlayer ==='x'? player1 : player2;
			message.textContent = `${winnerName} congratulations you won!`;
			return;
		}
		if(currentPlayer ==="x"){
			currentPlayer ="o";
			message.textContent = `${player2}, you're up`;
		}else{
			currentPlayer="x";
			message.textContent = `${player1}, you're up`;
		}
		
	});
});
function checkWinner() {
	for(let pattern of winPatterns){
		let a = pattern[0];
		let b = pattern[1];
		let c = pattern[2];
		if(
			board[a] !== "" &&
			board[a] === board[b] && board[b] === board[c]
		){
			return true;
		}
	}
	return false;
	
}















