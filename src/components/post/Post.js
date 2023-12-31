import "./post.css";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BASE_URL } from "../../config/config";
import { UserContext } from "../../context/UserContext";

const Post = ({
  _id,
  author,
  comments,
  coverImage,
  updatedAt,
  heading,
  postBody,
}) => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <>
      <div className="post-container">
        <div className="post">
          <div className="image">
            <Link to={BASE_URL + "/" + coverImage}>
              <img src={BASE_URL + "/" + coverImage} alt="" />
            </Link>
          </div>
          <div className="heading">
            <div className="heading-container">
              <h2>{heading}</h2>{" "}
              {userInfo?.nickname ? (
                <Link className="add-comment" to={`/post/${_id}`}>
                  Add comment
                </Link>
              ) : (
                <Link className="add-comment" to={`/login`}>
                  Login to add comments
                </Link>
              )}
            </div>
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
              {comment.message} by <b>{comment.author}</b>
            </div>
          ))}
      </div>
    </>
  );
};

export default Post;
