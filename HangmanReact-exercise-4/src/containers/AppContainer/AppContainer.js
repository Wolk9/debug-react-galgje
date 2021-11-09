import React from "react";
import App from "../../components/App/App";

const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];

const maxGuesses = 5;

class AppContainer extends React.Component {
  state = {
    chosenWord: "",
    guessedLetters: [],
    currentChosenLetter: "",
    maxGuesses: maxGuesses
  };

  chooseWord(list) {
    let index = Math.floor(Math.random() * list.length);
    console.log(`We chose word: ${list[index]}`);
    return list[index];
  }

  restartGameHandler = (event) => {
    this.setState({
      chosenWord: this.chooseWord(wordList),
      guessedLetters: [],
      currentChosenLetter: ""
    });
  };

  chosenLetterHandler = (event) => {
    const newState = { ...this.state };
    newState.currentChosenLetter = event.target.value;
    this.setState(newState);
  };

  guessLetterHandler = (event) => {
    const inputGiven = this.state.currentChosenLetter.length > 0; // check if there is any input given
    const newLetter = !this.state.guessedLetters.includes(
      this.state.currentChosenLetter
    );
    if (inputGiven && newLetter) {
      // if inputGive = true proceed
      const newGuessedLetters = [...this.state.guessedLetters];
      newGuessedLetters.push(this.state.currentChosenLetter);
      this.setState({
        guessedLetters: newGuessedLetters
      });
    }
    // else
    this.setState({
      currentChosenLetter: ""
    });
    event.preventDefault();
  };

  componentDidMount = () => {
    this.restartGameHandler();
  };

  render() {
    return (
      <App
        game={this.state}
        chosenLetterHandler={this.chosenLetterHandler}
        guessLetterHandler={this.guessLetterHandler}
        restartGameHandler={this.restartGameHandler}
      />
    );
  }
}

export default AppContainer;
