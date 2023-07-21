import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section className="reg-section">
          <h1>Success!</h1>
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section className="reg-section">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              required
              onChange={(e) => setUser(e.target.value)}
              value={user}
            ></input>

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              required
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
            ></input>

            <button>Sign In</button>
            <p className="login-footer">
              New User?
              <br />
              <span className="line">
                {/*put router link here*/}
                <Link to="/signup" className="login-sign-up">
                  Sign Up
                </Link>
              </span>
            </p>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
