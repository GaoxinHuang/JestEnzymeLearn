import React from 'react';
import PropTypes from 'prop-types';



function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState("");
  return (
    <div data-test='component-input'>
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          // placeholder={stringsModule.getStringByLanguage(language, 'guessInputPlaceholder')}
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          onClick={(evt) => {
            evt.preventDefault();
            // update guessedWords
            // const letterMatchCount = getLetterMatchCount(currentGuess, secretWord);
            // const newGuessedWords = [...guessedWords, { guessedWord: currentGuess, letterMatchCount }];
            // setGuessedWords(newGuessedWords);

            // check against secretWord and update success if needed
            // if (currentGuess === secretWord) {
            //   setSuccess(true);
            // }
            // clear input box
            setCurrentGuess("");
          }}
          className="btn btn-primary mb-2">
          {/* {stringsModule.getStringByLanguage(language, 'submit')} */}
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
}
export default Input;
