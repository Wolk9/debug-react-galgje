# Debug notes Martin de Bes

It appears that the games starts with a win, without playing the game. So I'll start searching in the code for where a win is declared.
In GameOver.js is a win depended on wether props.wordGuessed is true or false. If true the winResult is displayed, if false the loseResult is displayed.
It seems that no matter what winResult is always true. So let's find out where winResult is true is generated.
In App.js isGameOver generates a true when wordGuessed is true.
Let's console.log the remaining.length to see if that is set wrong
It keeps logging 0. That's not ok.
Let's console.log the incomming parameters word and geussedLetters.
Ah.. word seems empty all the time. That explaines a remaining 0 length.
So let's see where wordGuessed is called.
It is called in const App as a const wordWasGuessed, taking game.cosenWord and game.guessedLetters as props (game=props.game).
No typo's here.
So let's find out what console.log(game) gives in the arrow function App.
Ok, so now I see that in AppContainer.js the word geeuw is chosen. After that App.js does console.log a chosen word but the remaining.length keeps 0.
Let's dive into AppContainer.js.
My eye is directly caught at restartGameHandler as the parameter event is greyed out, meaning that the parameter is not used. It is called in an eventhandler click in the ResetGameButton component as props.restartGameHandler. I rather expect that to be game.restartGameHandler, as it is a prop given to function App. Let's try change that...
Doesn't solve the problem.
the key seems to be the remaining length parameter that is calculated wrongly.
Let's dig into that.
the let remaining = word.filter is now suspicious. Let's console.log(letter).
That all goes well.
But what does the function actualy do? I think that it does the opposite. Let's invert the include by adding an exclamation mark.
SOLVED. The filterd word was indeed filterd but the letter was included in the guessedLetter list, as it supposed to exclude it. This is done by include all other letters in the list of guessedLetters.
