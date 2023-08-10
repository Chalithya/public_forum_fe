import "./index.css";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { login } from "../../api/user";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const handleLogin = async (ev) => {
    ev.preventDefault();

    const response = await login(username, password);

    if (response.data?.success) {
      setUserInfo({ ...response.data.data, nickname: response.data.nickname });
      setRedirect(true);
      alert(`Welcome ${response.data.nickname}`);
    } else {
      alert(`Login Error: ${response.error}`);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form className="login" onSubmit={handleLogin}>
      <h1>Login</h1>
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
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
