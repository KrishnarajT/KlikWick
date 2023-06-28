import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import { Button } from "@material-tailwind/react";

const Light = () => {
  const [timeTaken, setTimeTaken] = useState(0);
  const playgroundRef = useRef(null);
  const timerRef = useRef(null);
  const buttonRef = useRef(null);

  const playGame = () => {
    buttonRef.current.disabled = true;
    const playground = playgroundRef.current;
    const timer = timerRef.current;

    timer.textContent = "Wait for Green";

    const timeToWait = Math.floor(Math.random() * 10000) + 1000;
    console.log("gonna wait for", timeToWait);

    const start = performance.now();

    const timeout = setTimeout(() => {
      playground.className =
        "flex h-2/4 flex-col items-center justify-center bg-green-500 hover:cursor-pointer";
      timer.textContent = "Click!";
    }, timeToWait);

    const eventHandle = () => {
      const end = performance.now();
      let timeTaken = end - start;

      if (timeTaken < timeToWait) {
        timer.textContent = "Too Early!";
        playground.removeEventListener("click", eventHandle);
        buttonRef.current.disabled = false;
        clearTimeout(timeout);
        return;
      }

      timeTaken = timeTaken - timeToWait - 100;
      setTimeTaken(timeTaken);
      timer.textContent = `${timeTaken}ms`;

      playground.className =
        "flex h-2/4 flex-col items-center justify-center bg-red-500 hover:cursor-pointer";
      buttonRef.current.disabled = false;
      playground.removeEventListener("click", eventHandle);
    };

    playground.addEventListener("click", eventHandle);
  };

  const handleSave = () => {
    let score = JSON.parse(localStorage.getItem("currentuser")).score.light;

    if (score === 0) {
      score = timeTaken;
    } else {
      score = (score + timeTaken) / 2;
    }

    let userdata = JSON.parse(localStorage.getItem("userdata"));
    for (let i = 0; i < userdata.length; i++) {
      if (
        userdata[i].id === JSON.parse(localStorage.getItem("currentuser")).id
      ) {
        userdata[i].score.light = score;
        break;
      }
    }

    localStorage.setItem("userdata", JSON.stringify(userdata));
    setTimeTaken(0);
  };

  return (
    <div className="relative h-screen">
      <Navbar />
      <div>
        <div className="m-4 flex flex-col justify-center gap-5 self-center p-4 text-center">
          <h1 className="product-sans text-primarycolor text-6xl font-light">
            Press <u>Spacebar</u> or <u>Click</u> <i>as soon as</i>
            <br />
            the Color turns <span className="text-green-500">Green</span>
          </h1>
        </div>
      </div>
      <div
        className="flex h-2/4 flex-col items-center justify-center bg-red-500 hover:cursor-pointer"
        ref={playgroundRef}
      >
        <h1
          className="product-sans text-9xl font-light text-red-200"
          ref={timerRef}
        >
          Go!
        </h1>
      </div>
      <div className=" flex justify-center gap-28 p-8 align-middle">
        <Button
          size="lg"
          className="scale-110 transform bg-blue-400 transition duration-500 ease-in-out hover:scale-125 hover:shadow-xl"
          onClick={handleSave}
        >
          Save Score
        </Button>

        <Button
          size="lg"
          className="scale-110 transform bg-green-400 transition duration-500 ease-in-out hover:scale-125 hover:shadow-xl"
          onClick={playGame}
          ref={buttonRef}
        >
          Play
        </Button>
      </div>
    </div>
  );
};

export default Light;
