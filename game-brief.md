# Game Brief: Dino Duel Tic-Tac-Toe

## Concept
A solo, dinosaur-themed tic-tac-toe game where the player chooses an empty square and wins or loses a short dinosaur duel to decide whether that square receives an X or an O.

## Intended player
One player, suitable for casual play on a laptop or phone. The rules should be understandable without prior gaming experience.

## Main action
Choose an empty board square, then respond to the dinosaur's announced move. A correct counter wins the duel and places X in that square; an incorrect counter loses the duel and places O there.

## Short round and rules
- Begin on an instruction screen. The board remains idle until the player chooses Start.
- The game board is a 3-by-3 grid. The player chooses every square; there is no automatic dinosaur turn or automatic opponent mark.
- Choosing an empty square starts one duel for that square and locks the board until the duel is resolved.
- Each duel begins with 2 player health points and 2 dinosaur health points.
- The dinosaur's predictable move sequence is **Chomp → Stomp → Tail Swipe**, restarting at Chomp for each new duel.
- The matching counters are **Dodge → Jump → Duck**, respectively. A correct counter removes 1 dinosaur health point; any other response removes 1 player health point. Exactly one side loses 1 point for each accepted response.
- After each response, the response buttons lock. If both sides still have health, the player must press **Next exchange** before the next dinosaur move appears.
- A duel ends immediately when either side reaches zero health. A duel win places X in the selected square; a duel loss places O there. The square is resolved exactly once.
- Three X marks in a row, column, or diagonal wins the board. Three O marks in a row, column, or diagonal means the dinosaur wins the board. A full board with no three-in-a-row is a draw.
- If the board is not finished, the player returns to choose another empty square. **Restart game** is available throughout active play and immediately clears the whole board and any duel in progress.
- When the board ends, show the result and a **Play again** button that resets all board and duel state.

## Theme and presentation
- Use a friendly prehistoric setting: a simple jungle/fern backdrop, fossil or footprint accents, and clear dinosaur-themed move labels.
- Represent the dinosaur and player health with readable text and simple icons; never communicate health or outcomes by color alone.
- Keep X and O marks large and easy to distinguish from the decorative theme.
- Use simple shapes, emoji, or CSS-drawn decorations in the first version; no downloaded artwork is required.
- Use encouraging, brief feedback such as “Dodge countered Chomp! Dinosaur loses 1 health.”

## Controls
- Standard accessible buttons for Start, the nine board squares, Dodge, Jump, Duck, Next exchange, Return to board, Restart game, and Play again.
- Controls must work with mouse, touch, and keyboard Tab plus Enter or Space, with visible keyboard focus.
- Each accepted response and duel result must apply only once, including during rapid repeated clicks.

## Scoring and outcomes
- There is no separate numeric score or leaderboard.
- A duel win awards X to the selected square; a duel loss awards O.
- The board outcome is **You win**, **Dinosaur wins**, or **Draw**, based on the tic-tac-toe rules.

## First-version exclusions
- No automatic opponent turn or automatic dinosaur mark.
- No timers, random attacks, inventories, upgrades, extra levels, sound, login, backend, multiplayer, global leaderboard, analytics, payments, or external asset libraries.
- Do not add extra combat moves or change the two-health-point duel rules in the first version.

## Five observable completion checks
1. **Start and choose:** Before Start, no duel or health changes occur. After Start, selecting an empty square opens one duel and locks all nine board squares.
2. **Correct counter:** Against Chomp, pressing Dodge once reduces dinosaur health from 2 to 1 while player health stays at 2; repeated presses before Next exchange do not cause extra damage.
3. **Incorrect counter and terminal result:** Against Chomp, pressing Jump reduces player health by 1. A duel ends immediately when either side reaches zero, with no further exchange button, and awards exactly one mark to the selected square.
4. **Board result:** Three X marks in any row, column, or diagonal produces You win; three O marks produces Dinosaur wins; a full board without a line produces Draw. Check lines before checking for a draw.
5. **Reset:** Restart game during a duel clears all nine squares and abandons that duel without awarding a mark. Play again after a board result starts a fresh empty board with fresh duel health.

## Current stage
Planning only. Agree on this brief and the rules before building the game.