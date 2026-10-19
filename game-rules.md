# Game Rules: Dino Duel Tic-Tac-Toe

## Goal

Win dinosaur duels to place X marks and make a three-in-a-row. Losing a duel places O. Three Xs in a row wins the board; three Os in a row means the dinosaur wins; a full board without a line is a draw.

## How to play

1. Press **Start Game**.
2. Choose any empty square on the 3-by-3 board to begin a duel. The board locks until the duel is resolved.
3. Match the dinosaur's move: **Chomp → Dodge**, **Stomp → Jump**, **Tail Swipe → Duck**. A correct response removes 1 dinosaur health; a wrong response removes 1 player health.
4. After a response, press **Next Exchange** if both sides still have health. A duel win places X; a duel loss places O. Continue until the board has a result, or restart at any time.

Mouse and touch users can tap buttons. Keyboard users can use Tab to focus a button and Enter or Space to activate it. Focus outlines remain visible.

## State and transition table

| Current state | Player action | Expected result |
| --- | --- | --- |
| Instructions | Start Game | Show an empty board; no health changes occur on the instruction screen. |
| Board | Select an empty square | Open a duel for that square, set both sides to 2 health, and lock the board. |
| Board | Select an occupied square | Ignore the action; occupied marks do not change. |
| Duel: waiting for response | Choose Dodge, Jump, or Duck | Apply one exchange exactly once, update one side's health, show feedback, and disable all response buttons. |
| Duel: response resolved; both sides alive | Next Exchange | Advance to the next dinosaur move and re-enable responses. |
| Duel: response resolved; one side at zero | Automatic duel resolution | End the duel immediately; assign exactly one X or O to the pending square. Do not show Next Exchange. |
| Board after duel | Continue | If the board is unfinished, allow the next empty square. If finished, show the final result. |
| Any active state | Restart Game | Clear all marks and pending duel state, then show a fresh empty board. |
| Final board result | Play Again | Clear the board and start a fresh game without returning to the instructions screen. |

## Duel rules

- Each duel starts with 2 player health and 2 dinosaur health.
- Dinosaur move order resets for every duel: **Chomp → Stomp → Tail Swipe**, then repeat if needed.
- Correct counters are **Dodge** for Chomp, **Jump** for Stomp, and **Duck** for Tail Swipe.
- A correct response reduces dinosaur health by 1; any incorrect response reduces player health by 1.
- Exactly one side loses one health point for each accepted response. No simultaneous damage, healing, random moves, timers, or automatic retaliation.
- Response buttons are disabled after one choice. A second click cannot cause extra damage.
- If either side reaches zero, the duel ends immediately. A player victory gives the selected square X; a player defeat gives it O. The square is assigned only once.
- No extra dinosaur turn occurs on the board; every square is chosen by the player.

## Board results

- Check all rows, columns, and diagonals for three Xs first: **You win!**
- Check for three Os: **The dinosaur wins!**
- Only after checking lines, if all nine squares are filled, show **Draw!**
- Otherwise, return to the board and allow another empty square.

## Reset behavior

Restart Game abandons an active duel and clears all board marks, health, selected square, move sequence, and feedback. Play Again performs the same reset after a final result but goes straight to the fresh board. No mark is awarded for an abandoned duel.

## Observable test cases

1. Before Start Game, no board or duel progress changes. Starting shows an empty board.
2. Selecting an empty square opens a duel with both health values at 2 and disables the board.
3. Against Chomp, Dodge reduces dinosaur health from 2 to 1; player health stays at 2. Clicking again does not change health.
4. Against Chomp, Jump reduces player health from 2 to 1; dinosaur health stays at 2.
5. A duel ends at zero health, assigns one mark to the pending square, and never offers Next Exchange after the duel ends.
6. Three Xs in any row, column, or diagonal wins; three Os loses; a full board without a line draws.
7. Restart during a duel clears all nine squares and awards no mark. Play Again after a board result starts a fresh board.
8. Board buttons and duel controls can be operated by mouse, touch, and keyboard focus/Enter/Space.

## Current status

Rules documented. Game implementation and browser playtesting are not yet verified.
