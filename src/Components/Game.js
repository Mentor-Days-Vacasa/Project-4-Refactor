import React from 'react';

const maxGuesses = 5;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      misses: 0,
      currentPhrase: "",
      guessedLetters: []
    }
  }

  render() {
    //guessed letters
    // letter picker
    // remaining guesses
    return (
      <div></div>
      <div>{maxGuesses - this.state.misses}</div>
    )
  }
}

export const Letter = (letter, picked) => (
  <div style={{backgroundColor: picked ? "blue" : "red"}}>{letter}</div>
)
