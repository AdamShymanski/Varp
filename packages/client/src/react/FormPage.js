import React, { useState, useEffect } from "react";
import "./../sass/FormPage-style.scss";

import Axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Slider from "@material-ui/core/Slider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import NavigationIcon from "@material-ui/icons/Navigation";

const schema = yup
  .object()
  .shape({
    a: yup.string().required(),
    b: yup.number().required().default(1),
    c: yup.number().min(1).max(10).required(),
    d: yup.number().min(1).max(10).required(),
    e: yup.number().min(1).max(10).required(),
    f: yup.string(),
  })
  .typeError("Please enter a response");

const useStyles = makeStyles({
  arrow: {
    marginTop: "1em",
    transform: "rotate(180deg)",
    color: "#ff1d00",
    fontSize: "3em",
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
  const { control, handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("auth-token");
      await Axios.post("/questionnaire/send_reply", {
        authToken: token,
        ...data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const classes = useStyles();
  return (
    <main className="FA center">
      <section className="center">
        <p className="robotoFont">QUESTIONNAIRE</p>
        <h1 className="robotoFont">Congratulations!</h1>
        <h3 className="robotoFont">
          You've just made the dream a little closer to the reality. Now we
          would like to to ask you for some more questions!
        </h3>
        <NavigationIcon className={classes.arrow} />
      </section>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <h1 className="robotoFont">
            How much time (in hours per day) do you spend on social media on
            twitter, fb, instagram, tiktok?
          </h1>
          <input className="textBox" type="text" name="a" ref={register} />
          <p className="error">{errors.a && errors.a.message}</p>
        </div>
        <div className="card">
          <h1 className="robotoFont">
            Are you using an ad blocker in your browser?
          </h1>
          <Controller
            defaultValue="1"
            as={
              <RadioGroup aria-label="ad-blocker">
                <FormControlLabel value="1" control={<Radio />} label="Yes" />
                <FormControlLabel value="2" control={<Radio />} label="No" />
              </RadioGroup>
            }
            name="b"
            control={control}
          />
          <p className="error">{errors.b && errors.b.message}</p>
        </div>
        <div className="card">
          <h1 className="robotoFont suo">
            How do you rate the effectiveness of Google Ads from the perspective
            of the person who's the recipient of the ad?
          </h1>
          <ThemeProvider theme={muiTheme}>
            <Controller
              name="c"
              control={control}
              defaultValue={6}
              render={(props) => (
                <Slider
                  {...props}
                  onChange={(_, value) => {
                    props.onChange(value);
                  }}
                  className={classes.slider}
                  defaultValue={6}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={10}
                />
              )}
            />
          </ThemeProvider>
          <p className="error">{errors.c && errors.c.message}</p>
        </div>
        <div className="card">
          <h1 className="robotoFont suo">Did the Pyramid interest you?</h1>
          <ThemeProvider theme={muiTheme}>
            <Controller
              name="d"
              control={control}
              defaultValue={6}
              render={(props) => (
                <Slider
                  {...props}
                  onChange={(_, value) => {
                    props.onChange(value);
                  }}
                  className={classes.slider}
                  defaultValue={6}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={10}
                />
              )}
            />
          </ThemeProvider>
          <p className="error">{errors.d && errors.d.message}</p>
        </div>
        <div className="card">
          <h1 className="robotoFont suo">
            Will you recommend Pyramid to your friends?
          </h1>
          <ThemeProvider theme={muiTheme}>
            <Controller
              name="e"
              control={control}
              defaultValue={6}
              render={(props) => (
                <Slider
                  {...props}
                  onChange={(_, value) => {
                    props.onChange(value);
                  }}
                  className={classes.slider}
                  defaultValue={6}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={10}
                />
              )}
            />
          </ThemeProvider>
          <p className="error">{errors.e && errors.e.message}</p>
        </div>
        <div className="card">
          <h1 className="robotoFont">
            What questions do you have for us as the creators of this project,
            or is it unclear to you in the game mechanics?
          </h1>
          <textarea
            className="high textBox"
            type="text"
            cols="40"
            rows="5"
            name="f"
            ref={register}
          ></textarea>
          <p className="error">{errors.f && errors.f.message}</p>
        </div>
        <div className="buttonContainer center">
          <button type="submit" className="robotoFont">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
