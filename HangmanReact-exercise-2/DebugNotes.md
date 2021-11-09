# Debug notes Martin de Bes

1. first we try to reproduce the problem
2. It appeares that we indeed can't guess a letter
3. the app renders completely as we see in the console that a new word to guess is generated
4. Tested: it doesn't matter if the letter is in or is not in the to be guessed word.
5. Unraffle step by step what process is followed:
   1. Use Devtools Chrome:
      1.It paused on an exception saying: TypeError: this.stateguesedLetters is not iterable. Well that seems like a typ as guessed is with two ss'es.
6. change the typo on line 50 in AppContainer.js
7. test if it works: Yes it does. Test if it works when you fail to guess the number: Yes it does
8. Write this documentation
