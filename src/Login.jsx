import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { addUser } from "./utils/userSlice";

const Login = () => {
  const [error, setError] = useState("");
  const email = useRef();
  const password = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );

      setError("");
    } catch (error) {
      setError(error.message || "Error while login");
    }
  };
  return (
    <form
      onSubmit={handleLogin}
      className="w-full flex justify-center items-center"
    >
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input ref={email} type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input
          ref={password}
          type="password"
          className="input"
          placeholder="Password"
        />

        <button className="btn btn-neutral mt-4">Login</button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="m-2">
          <Link to={"/register"}>
            Not regestired? please{" "}
            <span className="font-bold underline">SIGN UP</span> first
          </Link>
        </p>
      </fieldset>
    </form>
  );
};

export default Login;
