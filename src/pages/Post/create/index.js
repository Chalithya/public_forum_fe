import "./index.css";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { create } from "../../../api/post";

const CreatePost = () => {
  const [heading, setHeading] = useState("");
  const [postBody, setPostBody] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleCreate = async (ev) => {
    const data = new FormData();
    data.set("heading", heading);
    data.set("postBody", postBody);
    data.set("postBody", postBody);
    data.set("image", files[0]);

    ev.preventDefault();

    const response = await create(data);

    if (response.data.success) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <form onSubmit={handleCreate} className="form-container">
      <input
        type="heading"
        placeholder={"Heading"}
        value={heading}
        onChange={(ev) => setHeading(ev.target.value)}
        className="form-input"
      />
      <input
        type="postBody"
        placeholder={"Body"}
        value={postBody}
        onChange={(ev) => setPostBody(ev.target.value)}
        className="form-input"
      />
      <input
        type="file"
        onChange={(ev) => setFiles(ev.target.files)}
        className="form-file-input"
      />
      <button className="form-button">Create Post</button>
    </form>
  );
};
export default CreatePost;
