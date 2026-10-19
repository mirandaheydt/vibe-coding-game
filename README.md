# Dino Duel — Vibe Coding Game

A small, dinosaur-themed browser game built as part of the Vibe Coding workshop.

## Play the game

The first playable version is in `index.html`, with styling in `styles.css` and game logic in `game.js`.

To try it on your Mac without installing anything:
1. Download the repository files to one folder (or use GitHub's **Code → Download ZIP**).
2. Open `index.html` in a web browser.

This is a local-file play instruction, not a published website. Browser playtesting has not yet been completed.

## How to play

- Choose an empty square to start a dinosaur duel.
- Match the move: **Chomp → Dodge**, **Stomp → Jump**, **Tail Swipe → Duck**.
- Correct counters reduce dinosaur health; wrong counters reduce your health.
- Win a duel to place X. Lose a duel and O takes the square.
- Three Xs in a row wins; three Os in a row means the dinosaur wins; a full board without a line is a draw.
- Restart at any time, or choose Play Again after the final result.

## Project files

- [Game brief](game-brief.md) — agreed concept and scope.
- [Game rules](game-rules.md) — gameplay, controls, state transitions, and test cases.
- [Wireframe](wireframe.md) — planned screens and visual direction.
- [Game interface](index.html)
- [Styles](styles.css)
- [Game logic](game.js)
- [Project state](project-state.md) — current status and next checkpoint.

## Visual direction

A friendly 2D Jurassic jungle, classic cartoon dinosaur shapes, and playful purple and blue characters. The first version uses drawn SVG shapes and CSS decorations rather than downloaded art assets.

## Status

**Built in GitHub; browser testing not yet completed.** This version has not been deployed.
