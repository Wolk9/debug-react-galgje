## #Debug notes Martin de Bes

1. first we try to reproduce the problem
2. find out what word should be guessed
3. In AppContainer.js there is a wordList that gives us the words that the program uses.
4. I eliminate all possibilities exept the shortest (vis), so that I know for sure that I win.
5. I found out that that's not nescessary as there is a console.log on line 26 that gives us the answer up front in the console.
6. So step 4 is revoked
7. Search where the match is made it appears to be in app.js
8. the most obvious function is wordGuessed on line 12 of app.js
9. Search werhe the game is declared 'Game Over'
10. that appears to be in the function isGameOver
11. in the GameOver.js file there is a winResult loseResult dependent on the props.wordGuessed
12. that dependency is send as a prop wordWasGuessed which takes the props word and guessedLetters, what returns a remaining.length === 0. I find that suspicious so i console.log that remaining.length === 0
13. Ok. That gives a true once the word is guessed. Elliminated that possibility
14. Now have a look if that prop arrives at GameOver.js by a console log of that prop at line 20
15. the console reports an undefined, once it is true so the value isn't properly sent over, so appearently there is something wrong with addressing the prop.
16. On line 21 it says: props.wordGuessed and in app.js on line 32 the prop is with just one s, so the prop isn't sent with GameOver!
17. Let's add an s in line 32 in App.js.
18. Bug fixed!
19. Remove all added console.logs
20. Done.
