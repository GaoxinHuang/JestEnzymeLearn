import React from 'react';
import hookActions from './actions/hookActions';
import './App.css';
import Input from './Input';

import LanguagePicker from './LanguagePicker';
import languageContext from './contexts/languageContext'

/**
 * Reducer to update state, called automatically by dispatch
 * @param state {object} - existing state
 * @param action {object} - contains 'type' and 'payload' properties for the state update
 *                   for example: { type: "setSecretWord", payload: "party" }
 * @return {object} - new state
 */
function reducer(state, action) {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    case "setLanguage":
      return { ...state, language: action.payload };
    // Challenge #3: Give Up
    case "setGivenUp":
      return { ...state, givenUp: action.payload }
    // END: Challenge #3: Give Up
    // Challenge #4: Enter Secret Word
    case "setEnterSecretWord":
      return { ...state, enterSecretWord: action.payload }
    // END: Challenge #4: Enter Secret Word
    // Challenge #5: Server Error
    case "setServerError":
      return { ...state, serverError: action.payload }
    // END: Challenge #5: Server Error
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null, language: 'en' });
  const setSecretWord = (secretWord) => dispatch({
    type: "setSecretWord",
    payload: secretWord
  });

  const setLanguage = (language) =>
    dispatch({ type: "setLanguage", payload: language });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, []);

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    );
  }

  return <div className="container" data-test='component-app'>
    <h1>Jotto</h1>
    <languageContext.Provider value={state.language}>
      <LanguagePicker setLanguage={setLanguage} />
      <Input secretWord={state.secretWord} />
    </languageContext.Provider>

  </div>
}

export default App;
