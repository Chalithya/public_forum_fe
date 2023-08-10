import "./post.css";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config/config";

const Post = ({
  _id,
  author,
  comments,
  coverImage,
  updatedAt,
  heading,
  postBody,
}) => {
  console.log("cpmmnts", comments, _id);
  return (
    <>
      <div className="post-container">
        <div className="post">
          <div className="image">
            <Link to={`/post/${_id}`}>
              <img src={BASE_URL + "/" + coverImage} alt="" />
            </Link>
          </div>
          <div className="heading">
            <Link to={`/post/${_id}`}>
              <h2>{heading}</h2>
            </Link>
            <p className="content">{postBody}</p>
            <p className="info">
              <a className="author">
                By <b>{author?.username}</b>{" "}
              </a>
              <time>On {formatISO9075(new Date(updatedAt))}</time>
            </p>
          </div>
        </div>
        {comments.length > 0 &&
          comments.map((comment) => (
            <div className="textbox" key={comment._id}>
              {comment.message} by <b>message.author</b>
            </div>
          ))}
      </div>
    </>
  );
};

export default Post;
