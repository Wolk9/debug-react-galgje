# Debug notes Martin de Bes

1. First we are testing the bug-report. Is it true what the user says?
2. It appears indeed that when you have 0 guesses remaining you still have one more go. That is not good.
3. Let's find out where the count is deducted.
4. in App.js I see right away that in isGameOver if getWrongLetters.length > game.maxGuesses returns a true. But it should be >= as the game is already over when it is equal to the maxGuesses.
5. SOLVED
