import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";

function App() {
  const [isFirstStep, setFirstStep] = useState(true);
  const [namePlayer1, setNamePlayer1] = useState("");
  const [namePlayer2, setNamePlayer2] = useState("");
  const [updatePlayer1, setUpdatedPlayer1] = useState("");
  const [updatePlayer2, setUpdatedPlayer2] = useState("");

  function handleClickPlayer1() {
    setUpdatedPlayer1(namePlayer1);
    setNamePlayer1("");
  }

  function handleClickPlayer2() {
    setUpdatedPlayer2(namePlayer2);
    setNamePlayer2("");
  }

  return (
    <div>
      {/* {isFirstStep ? ( */}
      <div>
        <h2 className="center-text">First setup</h2>
        <div className="row">
          <div className="column">
            <h2>Name</h2>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={namePlayer1}
              onChange={(event) => {
                setNamePlayer1(event.target.value);
              }}
            />
            <Button variant="contained" onClick={handleClickPlayer1}>
              Submit
            </Button>
          </div>
          <div className="column">
            <h2>Name</h2>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={namePlayer2}
              onChange={(event) => {
                setNamePlayer2(event.target.value);
              }}
            />
            <Button variant="contained" onClick={handleClickPlayer2}>
              Submit
            </Button>
          </div>
        </div>

        <h2 className="center-text">Game</h2>
        <div className="row">
          <div className="column">
            <label>{updatePlayer1}</label>
          </div>
          <div className="column">
            <label>{updatePlayer2}</label>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="center-text">
          <TextField id="outlined-basic" label="Answer" variant="outlined" />
          <Button variant="contained">Submit</Button>
        </div>
        <div className="center-text">
          <TextField id="outlined-basic" label="Letter" variant="outlined" />
          <Button variant="contained">Submit</Button>
        </div>
      </div>

      {/* ) : (
        <div>
          <h2 className="center-text">Game</h2>
          <InputLabel value={updated}></InputLabel>
        </div>
      )
      } */}
    </div>
  );
}

export default App;
