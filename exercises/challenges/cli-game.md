# Command Line Game

This challenge can be an individual challenge or a pair challenge. The goal of this challenge will be to build an interactive game in the terminal using NodeJS and one or two npm modules. Some possible ideas for a game would include: trivia quiz, hangman, text based adventure game, and even pong or snake (**EXPERT LEVEL**).

## `npm` Module Fun

One of the challenges of this exercise is figuring out how to capture user input. Luckily, there are a few npm modules out there that will make this easier. Checkout [prompt](https://www.npmjs.com/package/prompt) and [inquirer](https://www.npmjs.com/package/inquirer). Feel free to install either of them and start exploring.

## Requirements

- [ ] When the app starts, display a start menu with the following options:
  ```
  1. START GAME
  2. EXIT
  ```
- [ ] If the `START GAME` option is chosen, begin the game. For extra fun, count down from 3 to 1 before beginning the game.
- [ ] If the `EXIT` option is chosen, alert the user that the program is about to close, then close the program.
- [ ] Have fun! The rest of the challenge if figuring out game logic for the specific game being made.

## Bonus

- [ ] Prompt the user for a username at the beginning of the game.
- [ ] Using `sqlite3` (make sure to have completed the `sqlite` exercise and read the accompanying resource file), store the username in the database.
  - [ ] If there is a point system used in the game, post the final score in the database along with the username.
- [ ] Once the game is over, display a leader board of the top five scorers.

## Additional Links

- [how to play games in the terminal](https://computers.tutsplus.com/tutorials/how-to-play-tetris-pong-and-other-hidden-games-on-your-mac--mac-44485)
- [list of emacs editor games](https://www.emacswiki.org/emacs/CategoryGames)