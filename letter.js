// constructor function for creating letter objects
var Letter = function(character) {
  this.character = character;
  this.guessedCharacter = false;
  this.checkCharacter = function() {
    if (this.character === " ") {
      this.guessedCharacter = true;
      return " ";
    } else {
      if (this.guessedCharacter === false) {
        return "_";
      }
    }
  };
  this.guessedCorrectly = function(guessedCorrectly) {
    if (guessedCorrectly === this.character) {
      this.guessedCharacter = true;
    }
  };
};

module.exports = Letter;
