import React, { useState, useEffect } from "react";
import "./../sass/FormPage-style.scss";

import Axios from "axios";

import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles({
  slider: {
    width: "20vw",
  },
  arrow: {
    marginTop: "2vh",
    transform: "rotate(180deg)",
    color: "#ff1d00",
    fontSize: "3.5vw",
  },
});

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#0082ff",
      },
      track: {
        color: "#ff1d00",
      },
      rail: {
        color: "#5c5c5c",
      },
      mark: {
        color: "red",
      },
    },
  },
});

export default function FormPage(props) {
  const [a, setA] = useState("empty");
  const [b, setB] = useState(true);
  const [c, setC] = useState(6);
  const [d, setD] = useState(6);
  const [e, setE] = useState(6);
  const [f, setF] = useState("empty");

  async function sendReply() {
    try {
      const token = localStorage.getItem("auth-token");
      console.log(token);
      await Axios.post("http://localhost:5000/questionnaire/send_reply", {
        authToken: token,
        first: a,
        second: b,
        third: c,
        fourth: d,
        fifth: e,
        sixth: f,
      });
      console.log(a, b, c, d, e, f);
    } catch (err) {
      console.log(err.message);
    }
  }

  const updateValue1 = (e, data) => {
    setC((c) => (c = data));
  };
  const updateValue2 = (e, data) => {
    setD((e) => (e = data));
  };
  const updateValue3 = (e, data) => {
    setE((e) => (e = data));
  };

  const classes = useStyles();
  return (
    <main className='FA center'>
      <section className='center'>
        <p className='robotoFont'>QUESTIONNAIRE</p>
        <h1 className='robotoFont'>Congratulations!</h1>
        <h3 className='robotoFont'>
          You've just made the dream a little closer to the reality. Now we would like to to ask you for some more
          questions!
        </h3>
        <NavigationIcon className={classes.arrow} />
      </section>
      <div className=' form'>
        <div className='card'>
          <h1 className='robotoFont'>How much time do you spend on social media?</h1>
          <input className='textBox' type='text' onChange={(e) => setA(e.target.value)}></input>
        </div>
        <div className='card'>
          <h1 className='robotoFont'>Are you using an ad blocker in your browser?</h1>
          <ul className='radioBox'>
            <li>
              <input id='r1' type='radio' name='radio' className='robotoFont' value='1' onChange={(e) => setB(true)} />
              <label for='r1' className='robotoFont'>
                Yes
              </label>
            </li>
            <li>
              <input
                id='r2'
                type='radio'
                name='radio'
                value='2'
                className='robotoFont'
                checked
                onChange={(e) => setB(false)}
              />
              <label for='r2' className='robotoFont'>
                No
              </label>
            </li>
          </ul>
        </div>
        <div className='card'>
          <h1 className='robotoFont suo'>
            How do you rate the effectiveness of Google Ads from the perspective of the person who's the recipient of
            the ad?
          </h1>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={updateValue1}
              className={classes.slider}
              defaultValue={6}
              aria-labelledby='discrete-slider'
              valueLabelDisplay='auto'
              step={1}
              marks
              min={1}
              max={10}
            />
          </ThemeProvider>
        </div>
        <div className='card'>
          <h1 className='robotoFont suo'>Did the Pyramid interest you?</h1>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={updateValue2}
              className={classes.slider}
              defaultValue={6}
              aria-labelledby='discrete-slider'
              valueLabelDisplay='auto'
              step={1}
              marks
              min={1}
              max={10}
            />
          </ThemeProvider>
        </div>
        <div className='card'>
          <h1 className='robotoFont suo'>Will you recommend Pyramid to your friends?</h1>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={updateValue3}
              className={classes.slider}
              defaultValue={6}
              aria-labelledby='discrete-slider'
              valueLabelDisplay='auto'
              step={1}
              marks
              min={1}
              max={10}
            />
          </ThemeProvider>
        </div>
        <div className='card'>
          <h1 className='robotoFont'>
            What questions do you have for us as the creators of this project, or is it unclear to you in the game
            mechanics?
          </h1>
          <textarea
            className='high textBox'
            type='text'
            cols='40'
            rows='5'
            onChange={(e) => setF(e.target.value)}></textarea>
        </div>
        <div className='buttonContainer center'>
          <button
            className='robotoFont'
            onClick={() => {
              sendReply();
            }}>
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
