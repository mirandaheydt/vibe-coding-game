# Wireframe: Dino Duel Tic-Tac-Toe

## Purpose

Plan the screen layout and visual hierarchy before implementation. This is a low-fidelity wireframe, not final artwork or a playable build.

## Visual direction

- **Style:** 2D cartoon game with classic, recognizable dinosaur silhouettes (such as a T. rex, triceratops, and stegosaurus), rounded shapes, expressive faces, and bold outlines.
- **Dinosaur colors:** playful purple and blue as the main colors, with optional teal, coral, and golden-yellow accents. Keep X and O marks high-contrast and easy to read.
- **Setting:** a Jurassic jungle clearing with layered green foliage, oversized ferns, palm-like leaves, vines, and distant prehistoric plants.
- **Depth:** use a few flat illustrated layers to suggest depth; keep the play area uncluttered. Jungle decorations frame the game rather than cover controls.
- **Art approach:** simple 2D shapes or CSS-drawn art for the first version; downloaded art assets are not required.
- **Accessibility:** readable text, clear button labels, visible keyboard focus, and never use color alone to communicate health or results.

## Screen A — Welcome

    ┌──────────────────────────────────────────────────────────────┐
    │  🌿 leaves / vines                         fern / footprints │
    │                                                              │
    │                 DINO DUEL                                    │
    │              TIC-TAC-TOE                                     │
    │                                                              │
    │         [ Friendly purple T. rex ] [ Blue dino ]             │
    │                                                              │
    │      Win a dinosaur duel to place an X. Lose to place an O.   │
    │                                                              │
    │                    [ START GAME ]                            │
    │                                                              │
    │            Jurassic jungle clearing backdrop                 │
    └──────────────────────────────────────────────────────────────┘

**Purpose:** Introduce the theme and explain the central rule in one sentence. The Start Game button is the main focus. No duel starts and no health changes before it is pressed.

## Screen B — Board / choose a square

    ┌──────────────────────────────────────────────────────────────┐
    │  🌿 DINO DUEL                              [ RESTART GAME ]   │
    │                                                              │
    │                Choose a clearing!                            │
    │             Tap an empty square to duel.                      │
    │                                                              │
    │             ┌────────┬────────┬────────┐                      │
    │             │        │   X    │        │                      │
    │             ├────────┼────────┼────────┤                      │
    │             │   O    │        │        │                      │
    │             ├────────┼────────┼────────┤                      │
    │             │        │        │   X    │                      │
    │             └────────┴────────┴────────┘                      │
    │                                                              │
    │       [Small purple dino]       [Small blue dino]            │
    │        You: 2 hearts             Dino: 2 hearts               │
    │                                                              │
    │               Jurassic jungle foliage border                 │
    └──────────────────────────────────────────────────────────────┘

**Purpose:** Keep the 3-by-3 board as the main focal point. Existing X and O marks stay large and legible. Empty squares are clearly interactive. The health display can be shown as text plus simple heart or fossil icons; each new duel starts with both sides at 2 health.

## Screen C — Duel in progress

    ┌──────────────────────────────────────────────────────────────┐
    │  DINO DUEL                                  [ RESTART GAME ]  │
    │                                                              │
    │  YOU                               DINOSAUR                  │
    │  [Player dino/avatar]              [Purple/blue dino art]    │
    │  Health: ♥ ♥                       Health: ♥ ♥               │
    │                                                              │
    │                 THE DINOSAUR USES...                         │
    │                                                              │
    │                       CHOMP!                                 │
    │                 [Large dino move pose]                       │
    │                                                              │
    │              How will you respond?                           │
    │             [ DODGE ] [ JUMP ] [ DUCK ]                       │
    │                                                              │
    │         Feedback appears here after one choice.              │
    │                                                              │
    └──────────────────────────────────────────────────────────────┘

**Purpose:** Make the announced dinosaur move and three response buttons easy to understand. The dinosaur move sequence is Chomp → Stomp → Tail Swipe. Matching responses are Dodge → Jump → Duck. A correct response removes 1 dinosaur health; an incorrect response removes 1 player health.

After a response, all three response buttons become disabled so the same exchange cannot be counted twice. Show a short plain-language message, for example: “Dodge countered Chomp! Dinosaur loses 1 health.”

If both sides still have health, show **[ NEXT EXCHANGE ]**. If either side reaches zero, end the duel immediately and show its result instead; do not show Next Exchange.

## Screen D — Duel result / return to board

    ┌──────────────────────────────────────────────────────────────┐
    │  DINO DUEL                                  [ RESTART GAME ]  │
    │                                                              │
    │                  [Dinosaur reaction art]                     │
    │                                                              │
    │                   YOU WON THE DUEL!                          │
    │             An X will mark your chosen square.               │
    │                                                              │
    │                  [ RETURN TO BOARD ]                         │
    │                                                              │
    └──────────────────────────────────────────────────────────────┘

For a lost duel, change the message to **“THE DINOSAUR WON THIS DUEL!”** and explain that an O will mark the chosen square. Resolve the chosen square exactly once, then return to the board if the overall game has not ended.

## Screen E — Final board result

    ┌──────────────────────────────────────────────────────────────┐
    │  DINO DUEL                                                    │
    │                                                              │
    │             ┌────────┬────────┬────────┐                      │
    │             │   X    │   X    │   X    │                      │
    │             ├────────┼────────┼────────┤                      │
    │             │   O    │        │   O    │                      │
    │             ├────────┼────────┼────────┤                      │
    │             │        │   O    │        │                      │
    │             └────────┴────────┴────────┘                      │
    │                                                              │
    │                     YOU WIN!                                 │
    │          [Celebrating dinosaur illustration]                │
    │                                                              │
    │                    [ PLAY AGAIN ]                            │
    └──────────────────────────────────────────────────────────────┘

Possible final messages are **You win**, **Dinosaur wins**, or **Draw**. Check for a three-in-a-row before checking whether the board is full. Play Again resets the board and duel state.

## Mobile layout

On narrow screens:
- Stack the title, status, board, and duel panel vertically.
- Keep the board square and make all nine cells comfortably tappable.
- Place Dodge, Jump, and Duck in a single row only if each remains comfortably sized; otherwise use a 2-row layout.
- Keep Restart Game visible without letting it overlap the board or response buttons.
- Use a compact foliage frame so the playable area remains prominent.

## Interaction and state notes

1. Start Game opens the empty board.
2. Selecting an empty square opens the duel and locks the board.
3. Each duel begins at 2 player health and 2 dinosaur health.
4. The dinosaur sequence resets to Chomp for each new duel.
5. One accepted response updates health once, then locks the response buttons.
6. If both sides remain alive, Next Exchange reveals the next move.
7. When a side reaches zero, award X for a duel win or O for a duel loss exactly once.
8. If the board has a winner or draw, show the final result and Play Again.
9. Restart Game during active play immediately clears all squares and abandons any duel without awarding a mark.

## Out of scope for this wireframe

No timers, random attacks, sound, inventories, upgrades, extra levels, multiplayer, login, backend, leaderboard, analytics, payments, or external asset libraries.

## Current status

Wireframe draft only. No game code has been written or tested yet. Review the screen layout and visual direction before implementation.
