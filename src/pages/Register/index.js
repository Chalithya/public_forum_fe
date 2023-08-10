import "./index.css";
import { useState } from "react";
import { register } from "../../api/user";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (ev) => {
    ev.preventDefault();

    const response = await register(username, password);

    if (response.data?.success) {
      alert("Registration successful");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <form className="register" onSubmit={handleRegister}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
