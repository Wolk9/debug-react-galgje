# debug notes Martin de Bes

First approach the bug. Is it so what the complaint says.
We can hit enter or click guess without a letter and it deducts 1 of the count of guesses remaining. That shouldn't be the case.
So let's debug and find out where is declared how many guesses are left.
in AppContainer.js maxGeusses is declared (5 as default)
and in the class AppContainer the state maxGuesses is set to maxGuesses.
Component App is called and in App.js GuessesLeft imported. Let's dive into that.
That is just a component to display off course; it is written with a capital G. Stupid.
But nevertheless I see that it uses a prop wrongletters to determine the length. I now know that I need to examine wrongLetters prop to debug further. Let's go back to App.js.
GuessesLeft is called with property wrongLetters declared in function getWrongLetters.
I think that the code of TextInput should ignore an empty entry by testing guessChosenLetter.
It appears that the submit is handled by guessLetterHandler. Let's have a look there.
So adding a test of the inputGive if it is longer than 0 works preventing entering nothing. But now the letter is never guessed.
So I need to test wether the guessed letter is not included in the currenChosenLetter.
SOLVED
