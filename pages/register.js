import React, { useState } from 'react';
import { auth, firestore } from '../firebaseConfig';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      // Save user details to Firestore database
      await firestore.collection('users').doc(user.uid).set({
        email: user.email,
        // Add additional user data if required
      });
      // Redirect to dashboard or homepage
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Register;