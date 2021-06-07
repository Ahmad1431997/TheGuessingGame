import React from "react";
import { useState } from "react";
//components

function App() {
  const [userNumber, setUserNumber] = useState();

  const [random, setRandom] = useState(Math.floor(Math.random() * 100 + 1));

  const [attempts, setAttempts] = useState(0);

  const [clickedNum, setclickedNum] = useState();

  const [gameOver, setGameOver] = useState(false);

  const handleChange = (event) => {
    if (event.target.value.length < 3 || event.target.value == 100) {
      setUserNumber(event.target.value);
    }

    console.log(event.target.value);
  };

  const compare = () => {
    if (userNumber != "") {
      setclickedNum(userNumber);

      console.log("R", random);

      if (random == userNumber) {
        console.log("Winer");
      }

      setAttempts(attempts + 1);
      if (attempts == 5) {
        setGameOver(true);
        reset();
      } else {
        setGameOver(false);
      }

      setUserNumber("");
    }
  };

  const reset = () => {
    setRandom(Math.floor(Math.random() * 100 + 1));
    setAttempts(0);
    setUserNumber();
    setclickedNum();
  };

  const fullAttempt = () => {
    reset();
    setGameOver(false);
  };

  return (
    <div>
      <p>
        The Monster stirs beneath the tumultuous waves, thinking of a number
        that will end the world Find the secret number and use it to banish The
        Monster
      </p>
      <input
        placeholder="1 - 100"
        type="number"
        min="1"
        maxLength="3"
        required
        value={userNumber}
        onChange={handleChange}
        style={{ maxLength: 3 }}
      />
      <button type="submit" onClick={compare}>
        Submit
      </button>{" "}
      <br />
      <br />
      <button type="reset" onClick={fullAttempt}>
        Reset
      </button>
      {clickedNum > random ? <p> too strong </p> : <p></p>}
      {clickedNum < random ? <p> too weak </p> : <p></p>}
      {clickedNum == random ? (
        <p> "Correct Answer" </p>
      ) : (
        <p> {console.log(random)}</p>
      )}
      <div>{gameOver && <b> Game over </b>}</div>
      <p> attempts : {attempts} </p>
    </div>
  );
}

export default App;
