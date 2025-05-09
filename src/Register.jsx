import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { validateEmail, validatePassword } from "./utils/helper";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (!validateEmail(email.current.value))
        throw new Error("Invalid Email input");
      if (!validatePassword(password.current.value))
        throw new Error("Invalid Password input");

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );

      await updateProfile(user, {
        displayName: name.current.value,
      });

      setSuccess("Registration successful!");
      setError(""); // clear error if any
    } catch (error) {
      setError(error.message || "Something went wrong");
      setSuccess("");
    }
  };
  return (
    <form
      onSubmit={handleSignUp}
      className="w-full flex justify-center items-center"
    >
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Register</legend>

        <label className="label">Name</label>
        <input ref={name} type="text" className="input" placeholder="Name" />

        <label className="label">Email</label>
        <input ref={email} type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input
          ref={password}
          type="password"
          className="input"
          placeholder="Password"
        />
        <button className="btn btn-neutral mt-4">Sign up</button>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <p className="m-2">
          <Link to={"/login"}>
            Already regestired?{" "}
            <span className="font-bold underline ">CLICK HERE </span>to proceed
            to Login
          </Link>
        </p>
      </fieldset>
    </form>
  );
};

export default Register;
