const GameBoard = (function () {
  let board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];

  let playerOne = {
    playerName: "Player 1",
    mark: "X",
  };
  let playerTwo = {
    playerName: "Player 2",
    mark: "O",
  };

  let currentPlayer;

  function startGame() {
    currentPlayer = playerOne;
  }

  function getPlayerName() {
    // Getting player names with prompt
    playerOne.playerName = prompt("Player 1 Name");
    playerTwo.playerName = prompt("Player 2 Name");
  }

  function checkAllSame() {
    if (
      board[0][0] != "-" &&
      board[0][0] == board[0][1] &&
      board[0][1] == board[0][2]
    )
      return true;
    else if (
      board[1][0] != "-" &&
      board[1][0] == board[1][1] &&
      board[1][1] == board[1][2]
    )
      return true;
    else if (
      board[2][0] != "-" &&
      board[2][0] == board[2][1] &&
      board[2][1] == board[2][2]
    )
      return true;
    else if (
      board[0][0] != "-" &&
      board[0][0] == board[1][0] &&
      board[1][0] == board[2][0]
    )
      return true;
    else if (
      board[0][1] != "-" &&
      board[0][1] == board[1][1] &&
      board[1][1] == board[2][1]
    )
      return true;
    else if (
      board[0][2] != "-" &&
      board[0][2] == board[1][2] &&
      board[1][2] == board[2][2]
    )
      return true;
    else if (
      board[0][0] != "-" &&
      board[0][0] == board[1][1] &&
      board[1][1] == board[2][2]
    )
      return true;
    else if (
      board[0][2] != "-" &&
      board[0][2] == board[1][1] &&
      board[1][1] == board[2][0]
    )
      return true;
  }

  function switchPlayer() {
    if (currentPlayer == playerOne) currentPlayer = playerTwo;
    else if (currentPlayer == playerTwo) currentPlayer = playerOne;
  }

  function addMark(row, col) {
    // Converting row and col into numbers
    row = Number(row);
    col = Number(col);

    // Adding the mark to the "board" array
    board[row][col] = currentPlayer.mark;

    console.clear();
    console.table(board);
    if (checkAllSame()) {
      resetGame();
      return `${currentPlayer.playerName} wins!`;
    }

    switchPlayer();
  }

  function resetGame() {
    board = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
    currentPlayer = playerOne;
  }

  return {
    addMark: addMark,
    startGame: startGame,
  };
})();

// let board = [
//   [X, X, X],
//   [X, X, X],
//   [X, X, X],
// ];
