import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";
import "./App.css";

function App() {
  const [remail, setRemail] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [Lemail, setLemail] = useState("");
  const [Lpassword, setLpassword] = useState("");
  const [user, setUser] = useState(null);

  const unsubscribe = auth.onAuthStateChanged((currentUser) => {
    setUser(currentUser);
  });
  useEffect(() => {
    return unsubscribe;
  }, []);

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        remail,
        rpassword
      );
      console.log(userCredential.user);
      setRemail("");
      setRpassword("");
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        Lemail,
        Lpassword
      );
      console.log(userCredential.user);
      setLemail("");
      setLpassword("");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="App">
      <h1>New User</h1>
      <div className="form">
        <input
          type="email"
          placeholder="email"
          value={remail}
          onChange={(e) => setRemail(e.target.value)}
        />
        <input
          type="password"
          value={rpassword}
          placeholder=" password"
          onChange={(e) => setRpassword(e.target.value)}
        />
        <button onClick={register}>Create User</button>
      </div>

      <h1>Login User</h1>
      <div className="form">
        <input
          type="email"
          placeholder="email"
          value={Lemail}
          onChange={(e) => setLemail(e.target.value)}
        />
        <input
          type="password"
          value={Lpassword}
          placeholder=" password"
          onChange={(e) => setLpassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>

      <div className="status">
        <h3>User logged in</h3>
        {user ? (
          <>
            <h4>{user.email}</h4>
            <button onClick={logout}>Sign Out</button>
          </>
        ) : (
          <p>User not logged in</p>
        )}
      </div>
    </div>
  );
}

export default App;
