// import React, { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import "./../sass/FormPage-style.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
});

interface FormProps {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
  age: number;
  country: string;
}

export default function SignInPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("auth-token"));
  useEffect(() => {
    console.log("triggered");
    if (localStorage.getItem("auth-token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [token]);
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  });

  const logOut = () => {
    localStorage.clear();
    setToken(null);
  };
  const onSubmit = async (data: FormProps) => {
    try {
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="FA center">
      <section className="center">
        <h1 className="robotoFont">{loggedIn ? "Log out" : "Log in"}</h1>
      </section>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {loggedIn ? null : (
          <>
            <div className="card">
              <h1 className="robotoFont suo">E-mail</h1>
              <input
                className="textBox"
                type="text"
                name="email"
                ref={register}
              />
            </div>
            <div className="card">
              <h1 className="robotoFont suo">Password</h1>
              <input
                className="textBox"
                type="password"
                name="password"
                ref={register}
              />
            </div>
          </>
        )}
        <div className="buttonContainer center">
          {loggedIn ? (
            <button onClick={() => logOut()} className="robotoFont">
              Log Out
            </button>
          ) : (
            <button type="submit" className="robotoFont">
              Submit
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
