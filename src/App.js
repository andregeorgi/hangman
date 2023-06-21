import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const dictionary = ["laptop", "monitor", "mouse"];
var stringOpt = "";
var arrChar = [];

function App() {
  const [isFirstStep, setFirstStep] = useState(true);
  const [namePlayer1, setNamePlayer1] = useState("");
  const [namePlayer2, setNamePlayer2] = useState("");
  const [updatePlayer1, setUpdatedPlayer1] = useState("");
  const [updatePlayer2, setUpdatedPlayer2] = useState("");

  const [word, setWord] = useState("");

  const [answer, setAnswer] = useState("");
  const [letter, setLetter] = useState("");

  const [errorMark, setErrorMark] = useState([]);

  useEffect(() => {
    if (namePlayer1.length && namePlayer2.length) {
      setFirstStep(false);
      stringOpt = chooseWord();
      hideWord(stringOpt);
    }
  }, [updatePlayer1, updatePlayer2]);

  function chooseWord() {
    var randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    return randomWord;
  }

  function hideWord(word) {
    var specialCharacter = "_ ";
    for (var i = 0; i < word.length; i++) {
      arrChar.push(specialCharacter);
    }
    setWord(arrChar);
  }

  function handleClickPlayer1() {
    setUpdatedPlayer1(namePlayer1);
  }

  function handleClickPlayer2() {
    setUpdatedPlayer2(namePlayer2);
  }

  function handleAnswerClick() {
    if (stringOpt === answer) {
      setWord(stringOpt);
      alert("You won");
    } else alert("Try again");
  }

  function changeLetter(array1, array2, index) {
    if (index >= 0) {
      array2[index] = array1[index];
    }
    return array2;
  }

  function handleLetterClick() {
    var newWord = stringOpt.split("");
    var newArry;
    for (var i = 0; i < newWord.length; i++) {
      if (newWord[i] === letter) {
        newArry = changeLetter(newWord, arrChar, i);
      }
    }
  }

  return (
    <div>
      {isFirstStep ? (
        <div>
          <h2 className="center-text">First setup</h2>
          <div className="row">
            <div className="column">
              <h2>Name Player 1</h2>
              <TextField
                id="outlined-basic"
                label="Player 1"
                variant="outlined"
                value={namePlayer1}
                onChange={(event) => {
                  setNamePlayer1(event.target.value);
                }}
              />
              <Button
                variant="contained"
                onClick={handleClickPlayer1}
                className="btn-height"
              >
                Submit
              </Button>
            </div>
            <div className="column">
              <h2>Name Player 2</h2>
              <TextField
                id="outlined-basic"
                label="Player 2"
                variant="outlined"
                value={namePlayer2}
                onChange={(event) => {
                  setNamePlayer2(event.target.value);
                }}
              />
              <Button
                variant="contained"
                onClick={handleClickPlayer2}
                className="btn-height"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="center-text">Game</h2>
          <h3 className="center-text">{word}</h3>
          <div className="row">
            <div className="column">
              <label>{updatePlayer1}</label>
              <table>
                <tbody>
                  <tr>
                    {errorMark.map((mark, index) => (
                      <td key={index}>x</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column">
              <label>{updatePlayer2}</label>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="center-text">
            <TextField
              id="outlined-basic"
              label="Answer"
              variant="outlined"
              onChange={(event) => {
                setAnswer(event.target.value);
              }}
              value={answer}
            />
            <Button
              variant="contained"
              onClick={handleAnswerClick}
              className="btn-height"
            >
              Submit
            </Button>
          </div>
          <div className="center-text">
            <TextField
              id="outlined-basic"
              label="Letter"
              variant="outlined"
              onChange={(event) => {
                setLetter(event.target.value);
              }}
              value={letter}
            />
            <Button
              variant="contained"
              onClick={handleLetterClick}
              className="btn-height"
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
