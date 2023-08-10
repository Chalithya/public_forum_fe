import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/global/Layout/Layout";
import IndexPage from "./pages";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { UserContextProvider } from "./context/UserContext";
import CreatePost from "./pages/Post/create";
import Comment from "./pages/Comment";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage message={"index"}/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<Comment />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
