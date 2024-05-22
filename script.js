const GameBoard = (function () {
  let board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];

  let playerOne = {
    playerName: "Umar",
    mark: "X",
  };
  let playerTwo = {
    playerName: "Zaid",
    mark: "O",
  };

  let currentPlayer = playerOne;

  const markBtns = document.querySelectorAll(".cell");
  const resetBtn = document.querySelector("#reset-btn");
  const turnHeader = document.querySelector("#turn");
  const changeNameModal = document.querySelector("dialog");
  const changeNameBtn = document.querySelector("#change-name-btn");

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

  function checkWinner() {
    if (checkAllSame()) {
      return `${currentPlayer.playerName} wins!`;
    }
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
  }

  function resetGame() {
    board = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
    currentPlayer = playerOne;
    displayTurn();
    Array.from(markBtns).forEach((btn) => {
      btn.textContent = "";
    });
  }

  Array.from(markBtns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let row = btn.dataset.row;
      let column = btn.dataset.column;
      addMark(row, column);
      btn.textContent = currentPlayer.mark;
      console.log(currentPlayer);
      console.log(checkWinner());
      displayTurn();
      switchPlayer();
    });
  });

  function displayTurn() {
    if (currentPlayer == playerOne)
      turnHeader.textContent = `${playerTwo.playerName}'s Turn`;
    else if (currentPlayer == playerTwo)
      turnHeader.textContent = `${playerOne.playerName}'s Turn`;
  }

  resetBtn.addEventListener("click", resetGame);

  changeNameBtn.addEventListener("click", function () {
    changeNameModal.close();
  });

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
