import "./index.css";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { addComment, getById } from "../../api/post";
import { BASE_URL } from "../../config/config";

const Comment = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [post, setPost] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleCreate = async (ev) => {
    ev.preventDefault();

    const response = await addComment(comment, id);

    if (response.data.success) {
      setRedirect(true);
    }
  };

  useEffect(() => {
    getById(id).then((post) => setPost(post.data.data));
  }, []);

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <form onSubmit={handleCreate} className="form-container">
      <div className="post">
        <h1>{post.heading}</h1>
        <div className="image">
          <img src={BASE_URL + "/" + post.coverImage} alt="" />
        </div>
      </div>
      <input
        type="comment"
        placeholder={"comment"}
        value={comment}
        onChange={(ev) => setComment(ev.target.value)}
        className="form-input"
      />
      <button className="form-button">Add Comment</button>
      <div className="comments">
        {post?.comments?.length > 0 &&
          post?.comments.map((comment) => (
            <div className="textbox" key={comment._id}>
              {comment.message} by <b>{comment._id}</b>
            </div>
          ))}
      </div>
    </form>
  );
};
export default Comment;
