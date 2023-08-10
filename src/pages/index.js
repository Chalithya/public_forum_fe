import Post from "../components/post/Post";
import { getAll } from "../api/post";
import { useEffect, useState } from "react";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAll()
      .then((allPosts) => {
        setPosts(allPosts.data.data);
      })
      .catch(() => alert("Posts not found"));
  }, []);

  return <>{posts.length > 0 && posts.map((post) => <Post key={post._id} {...post} />)}</>;
};

export default IndexPage;
