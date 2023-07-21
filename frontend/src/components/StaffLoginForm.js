import React from "react";
import { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const StaffLoginForm = () => {
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
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userid" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="userid"
              ref={userRef}
              autoComplete="off"
              required
              onChange={(e) => setUser(e.target.value)}
              value={user}
              className="form-control"
            ></input>

            <label htmlFor="paswd" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="paswd"
              required
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              className="form-control"
            ></input>
            <button>Sign In</button>
          </form>
        </section>
      )}
    </>
  );
};

export default StaffLoginForm;
