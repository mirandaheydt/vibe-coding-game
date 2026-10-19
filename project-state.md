# Project state: Dino Duel Tic-Tac-Toe

| Field | Value |
| --- | --- |
| Project name and type | Dino Duel Tic-Tac-Toe — browser game |
| Owner and intended audience | Learner project; casual one-player game |
| Local folder or workspace | No local workspace connected in this session |
| GitHub repository and branch | https://github.com/mirandaheydt/vibe-coding-game — main |
| Version | First playable build; app code present in commit history before checkpoint record (see repository main branch) |
| Last updated | 2026-10-19 |
| Chatbot and route | ChatGPT, portable workflow with GitHub file editing |
| Current lesson and skill | Vibe Coding workshop, vc-game-build |
| Vercel project and URL | Not deployed |
| Last working copy and how to reopen it | Current files on GitHub main; download ZIP and open index.html in a browser to try locally |

## Goal and agreed scope

Purpose: A small 2D dinosaur-themed tic-tac-toe game set in a Jurassic jungle. Classic friendly dinosaur shapes use purple and blue as primary colors.

First version includes:
- Welcome/instructions screen, 3-by-3 board, short dinosaur duel, final result, restart, and play again.
- Dinosaur move sequence Chomp → Stomp → Tail Swipe; matching responses Dodge → Jump → Duck.
- Each duel starts with 2 health per side. Correct response removes 1 dinosaur health; incorrect response removes 1 player health.
- A duel win awards X; a duel loss awards O. Three Xs wins, three Os means dinosaur wins, and a full board without a line draws.
- Responsive layout, keyboard-focus styling, touch/mouse buttons, visible health text, and simple drawn SVG dinosaur art.
- No backend, account, downloaded art, paid service, timer, sound, leaderboard, analytics, or multiplayer.

Out of scope: New moves, random attacks, upgrades, extra levels, backend services, and deployment until explicitly requested.

## Files the next assistant must receive

- README.md
- game-brief.md
- game-rules.md
- wireframe.md
- index.html
- styles.css
- game.js
- project-state.md

All are in https://github.com/mirandaheydt/vibe-coding-game on main.

## Observed state

| Check | Version and location tested | Passed / Failed / Not tested | Actual observation |
| --- | --- | --- | --- |
| Repository file creation and read-back | GitHub main | Passed | Game files and planning docs were fetched from GitHub after creation. |
| No external runtime dependencies in game logic/styles | Current game.js and styles.css content | Passed by code inspection | No external URLs or imports found in those files. |
| JavaScript syntax in a browser/runtime | Current game.js on main | Not tested | No browser or local JavaScript runtime was available in this workflow. |
| Welcome → board → duel → mark → return flow | Current game on main | Not tested | Requires opening index.html in a browser and trying a complete duel. |
| Board wins, dinosaur wins, draw, and restart | Current game on main | Not tested | Must be checked by playing; no automated browser test has run. |
| Phone layout and keyboard controls | Current game on main | Not tested | Requires manual testing at narrow width and with keyboard navigation. |
| Public deployment | Current repository version | Not tested | The game has not been deployed. |

## Current blocker or last change

Last change: refined all six dinosaur illustrations toward the wireframe's classic cartoon T. rex and triceratops direction; enlarged the board area; reduced X/O sizing; fixed the board grid to use three equal-height rows so marks do not resize it.

Exact next check:
1. Download the repository with GitHub's Code → Download ZIP.
2. Unzip it and open index.html in a browser.
3. Press Let's play, select an empty square, and try Dodge against Chomp.

Expected result: the board appears; choosing a square opens a duel; Dodge reduces dinosaur health from 2 to 1, leaves player health at 2, disables the response buttons, and offers Next exchange.

Actual result: Not yet observed in a browser.

## Next action

One small task: open the updated index.html in a browser and check that the new dinosaur shapes look right, then confirm the board stays the same size when an X or O appears.

Completion check: report whether the board opens, the duel starts, and one Dodge response changes health exactly once.

Who owns the next edit: learner and ChatGPT together, based on the observed result.

Permissions already given: write the learner's game files in this repository. No deployment or publication requested.

## Prompt for a new chat

> Read this state record and the actual current files in mirandaheydt/vibe-coding-game. The project is Dino Duel Tic-Tac-Toe. Browser playtesting has not yet been completed and the game is not deployed. Continue with the next small task: ask for the result of the first duel test, then investigate any specific failure before making changes. Do not claim the game is tested or live without evidence.
