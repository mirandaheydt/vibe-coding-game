(() => {
  "use strict";

  const MOVE_SEQUENCE = [
    { name: "Chomp", counter: "Dodge", hint: "A big chomp is coming your way!" },
    { name: "Stomp", counter: "Jump", hint: "The ground is about to shake!" },
    { name: "Tail Swipe", counter: "Duck", hint: "Duck under that swinging tail!" }
  ];
  const MAX_HEALTH = 3;
  const WINNING_LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const screens = {
    welcome: document.getElementById("welcome-screen"),
    board: document.getElementById("board-screen"),
    duel: document.getElementById("duel-screen"),
    final: document.getElementById("final-screen")
  };
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const playAgainButton = document.getElementById("play-again-button");
  const homeLink = document.getElementById("home-link");
  const cells = Array.from(document.querySelectorAll("[data-cell]"));
  const responseButtons = Array.from(document.querySelectorAll("[data-response]"));
  const nextExchangeButton = document.getElementById("next-exchange-button");
  const returnBoardButton = document.getElementById("return-board-button");
  const responseArea = document.getElementById("response-area");
  const duelFeedback = document.getElementById("duel-feedback");

  let board = Array(9).fill("");
  let currentScreen = "welcome";
  let gameStarted = false;
  let gameOver = false;
  let pendingCell = null;
  let playerHealth = MAX_HEALTH;
  let dinosaurHealth = MAX_HEALTH;
  let currentMove = null;
  let responseResolved = false;
  let duelResolved = false;

  function showScreen(name) {
    currentScreen = name;
    Object.entries(screens).forEach(([key, element]) => {
      element.hidden = key !== name;
    });
    restartButton.hidden = !gameStarted || name === "welcome" || name === "final";
    renderBoard();
    if (name === "board") {
      document.getElementById("board-instructions").textContent = "Tap an empty spot to start a dinosaur duel.";
    }
  }

  function startGame() {
    resetState();
    gameStarted = true;
    showScreen("board");
    document.getElementById("board-status").textContent = "Your adventure starts here! Pick any empty square.";
    cells[0].focus();
  }

  function resetState() {
    board = Array(9).fill("");
    gameOver = false;
    pendingCell = null;
    playerHealth = MAX_HEALTH;
    dinosaurHealth = MAX_HEALTH;
    currentMove = null;
    responseResolved = false;
    duelResolved = false;
    duelFeedback.hidden = true;
    duelFeedback.textContent = "";
    duelFeedback.className = "duel-feedback";
    responseArea.hidden = false;
    nextExchangeButton.hidden = true;
    returnBoardButton.hidden = true;
    responseButtons.forEach(button => { button.disabled = false; });
  }

  function restartGame() {
    resetState();
    gameStarted = true;
    showScreen("board");
    document.getElementById("board-status").textContent = "Fresh start! Pick an empty square to begin a new duel.";
    cells[0].focus();
  }

  function renderBoard() {
    cells.forEach((cell, index) => {
      const mark = board[index];
      cell.textContent = mark;
      cell.classList.toggle("mark-x", mark === "X");
      cell.classList.toggle("mark-o", mark === "O");
      cell.classList.remove("pending-cell");
      cell.disabled = Boolean(mark) || currentScreen !== "board" || gameOver;
      const row = Math.floor(index / 3) + 1;
      const column = (index % 3) + 1;
      cell.setAttribute("aria-label", "Row " + row + ", column " + column + ", " + (mark ? mark : "empty"));
    });
  }

  function beginDuel(index) {
    if (!gameStarted || gameOver || currentScreen !== "board" || board[index]) return;
    pendingCell = index;
    playerHealth = MAX_HEALTH;
    dinosaurHealth = MAX_HEALTH;
    currentMove = null;
    responseResolved = false;
    duelResolved = false;
    responseButtons.forEach(button => { button.disabled = false; });
    responseArea.hidden = false;
    duelFeedback.hidden = true;
    nextExchangeButton.hidden = true;
    returnBoardButton.hidden = true;
    currentMove = randomMove();
    renderHealth();
    renderMove();
    showScreen("duel");
    document.getElementById("duel-subtitle").textContent = "Win this duel to place X in square " + (index + 1) + ".";
    responseButtons[0].focus();
  }

  function randomMove() {
    return MOVE_SEQUENCE[Math.floor(Math.random() * MOVE_SEQUENCE.length)];
  }

  function renderMove() {
    const move = currentMove;
    document.getElementById("dino-move-name").textContent = move.name.toUpperCase() + "!";
    document.getElementById("move-hint").textContent = move.hint;
  }

  function renderHealth() {
    document.getElementById("duel-player-health").textContent = "Health: " + playerHealth + " of " + MAX_HEALTH;
    document.getElementById("duel-dino-health").textContent = "Health: " + dinosaurHealth + " of " + MAX_HEALTH;
    document.getElementById("duel-player-bar").style.width = (playerHealth / MAX_HEALTH * 100) + "%";
    document.getElementById("duel-dino-bar").style.width = (dinosaurHealth / MAX_HEALTH * 100) + "%";
  }

  function chooseResponse(response) {
    if (currentScreen !== "duel" || responseResolved || duelResolved || pendingCell === null) return;
    responseResolved = true;
    responseButtons.forEach(button => { button.disabled = true; });

    const move = currentMove;
    if (response === move.counter) {
      dinosaurHealth = Math.max(0, dinosaurHealth - 1);
      showFeedback("Great counter! " + response + " beat " + move.name + ". The dinosaur loses 1 health.", "win");
    } else {
      playerHealth = Math.max(0, playerHealth - 1);
      showFeedback("Oof! " + move.name + " caught you. You lose 1 health. The right counter was " + move.counter + ".", "loss");
    }
    renderHealth();

    if (playerHealth === 0 || dinosaurHealth === 0) {
      finishDuel();
      return;
    }
    nextExchangeButton.hidden = false;
    nextExchangeButton.focus();
  }

  function showFeedback(message, kind) {
    duelFeedback.textContent = message;
    duelFeedback.className = "duel-feedback " + (kind === "loss" ? "feedback-loss" : "feedback-win");
    duelFeedback.hidden = false;
  }

  function nextExchange() {
    if (currentScreen !== "duel" || !responseResolved || duelResolved || playerHealth <= 0 || dinosaurHealth <= 0) return;
    currentMove = randomMove();
    responseResolved = false;
    nextExchangeButton.hidden = true;
    duelFeedback.hidden = true;
    responseButtons.forEach(button => { button.disabled = false; });
    renderMove();
    responseButtons[0].focus();
  }

  function finishDuel() {
    if (duelResolved || pendingCell === null) return;
    duelResolved = true;
    const playerWon = dinosaurHealth === 0 && playerHealth > 0;
    board[pendingCell] = playerWon ? "X" : "O";
    const finishedCell = pendingCell;
    pendingCell = null;
    responseArea.hidden = true;
    nextExchangeButton.hidden = true;

    const boardResult = getBoardResult();
    if (boardResult) {
      gameOver = true;
      showFinalResult(boardResult);
      return;
    }

    if (playerWon) {
      showFeedback("You won the duel! X is locked into square " + (finishedCell + 1) + ". Return to the board for your next challenge.", "win");
    } else {
      showFeedback("The dinosaur won this duel. O is locked into square " + (finishedCell + 1) + ". You can try another square!", "loss");
    }
    returnBoardButton.hidden = false;
    returnBoardButton.focus();
  }

  function getBoardResult() {
    for (const line of WINNING_LINES) {
      if (line.every(index => board[index] === "X")) return "player";
    }
    for (const line of WINNING_LINES) {
      if (line.every(index => board[index] === "O")) return "dinosaur";
    }
    if (board.every(Boolean)) return "draw";
    return null;
  }

  function showFinalResult(result) {
    const title = document.getElementById("final-title");
    const message = document.getElementById("final-message");
    const mascot = document.getElementById("final-mascot");
    if (result === "player") {
      title.textContent = "You win!";
      message.textContent = "Three Xs in a row! You're the king or queen of this Jurassic jungle.";
      mascot.querySelector("img").src = "assets/trex-idle.png";
    } else if (result === "dinosaur") {
      title.textContent = "Dinosaur wins!";
      message.textContent = "The dinosaur made three Os in a row. Ready to challenge it again?";
      mascot.querySelector("img").src = "assets/triceratops-idle.png";
    } else {
      title.textContent = "It's a draw!";
      message.textContent = "The jungle is evenly matched. Play again and see who claims the clearing!";
      mascot.querySelector("img").src = "assets/trex-idle.png";
    }
    const summary = document.getElementById("final-board-summary");
    summary.replaceChildren();
    board.forEach(mark => {
      const cell = document.createElement("span");
      cell.className = "summary-cell" + (mark === "X" ? " mark-x" : mark === "O" ? " mark-o" : "");
      cell.textContent = mark;
      summary.appendChild(cell);
    });
    showScreen("final");
    playAgainButton.focus();
  }

  function returnToBoard() {
    if (currentScreen !== "duel" || !duelResolved) return;
    showScreen("board");
    document.getElementById("board-status").textContent = "Square claimed! Choose another empty square.";
    const nextCell = cells.find(cell => !cell.disabled);
    if (nextCell) nextCell.focus();
  }

  startButton.addEventListener("click", startGame);
  restartButton.addEventListener("click", restartGame);
  playAgainButton.addEventListener("click", restartGame);
  homeLink.addEventListener("click", event => {
    event.preventDefault();
    if (gameStarted) restartGame();
  });
  cells.forEach((cell, index) => cell.addEventListener("click", () => beginDuel(index)));
  responseButtons.forEach(button => {
    button.addEventListener("click", () => chooseResponse(button.dataset.response));
  });
  nextExchangeButton.addEventListener("click", nextExchange);
  returnBoardButton.addEventListener("click", returnToBoard);

  showScreen("welcome");
})();
