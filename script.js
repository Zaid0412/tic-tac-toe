const GameBoard = (function () {
  let board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];

  let playerOne = {
    playerName: "Player One",
    mark: "X",
  };
  let playerTwo = {
    playerName: "Player Two",
    mark: "O",
  };

  let currentPlayer = playerOne;

  const markBtns = document.querySelectorAll(".cell");
  const resetBtn = document.querySelector("#reset-btn");
  const changeNameBtn = document.querySelector("#change-name-btn");
  const submitName = document.querySelector("#submit-name");
  const playAgainBtn = document.querySelector(".play-again-btn");
  const turnHeader = document.querySelector("#turn");
  const changeNameModal = document.querySelector("dialog");
  const playerOneNameInput = document.querySelector("#player-one");
  const playerTwoNameInput = document.querySelector("#player-two");
  const displayWinnerModal = document.querySelector(".display-winner-modal");
  const winnerText = document.querySelector(".winner-text");

  function startGame() {
    currentPlayer = playerOne;
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
      displayWinnerModal.showModal();
      winnerText.textContent = `${currentPlayer.playerName} Wins!`;
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
    if (
      !(
        board[row][col].textContent == "X" && board[row][col].textContent == "O"
      )
    ) {
      board[row][col] = currentPlayer.mark;

      console.clear();
      console.table(board);
    }
  }

  function resetGame() {
    board = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"],
    ];
    currentPlayer = playerOne;
    displayTurn();
    turnHeader.textContent = `${playerOne.playerName}'s Turn`;
    displayWinnerModal.close();

    Array.from(markBtns).forEach((btn) => {
      btn.textContent = "";
    });
  }

  Array.from(markBtns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let row = btn.dataset.row;
      let column = btn.dataset.column;
      if (
        !(
          board[row][column].textContent == "X" &&
          board[row][column].textContent == "O"
        )
      ) {
        addMark(row, column);
        btn.textContent = currentPlayer.mark;

        console.log(checkWinner());
        displayTurn();
        switchPlayer();
      }
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
    changeNameModal.showModal();
  });

  submitName.addEventListener("click", function () {
    playerOne.playerName = playerOneNameInput.value;
    playerTwo.playerName = playerTwoNameInput.value;
    displayTurn();
    turnHeader.textContent = `${playerOne.playerName}'s Turn`;
  });

  playAgainBtn.addEventListener("click", resetGame);

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
