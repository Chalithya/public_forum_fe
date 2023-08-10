import "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { logOut } from "../../../api/user";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);

  const handleLogout = async () => {
    await logOut();
    setUserInfo(null);
  };

  const username = userInfo?.nickname;

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <Link to="/profile">Profile</Link>
            <a onClick={handleLogout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
