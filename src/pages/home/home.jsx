import React, { useEffect, useState } from "react";
import "./home.css";
import { getPosts } from "../../services/api/getPosts";
import PostCard from "../../atoms/postCard/postCard";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  const handleIncreaseCounter = () => {
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    const handleGetPosts = async () => {
      try {
        const posts = await getPosts();
        console.log(posts);
        setPosts(posts);
      } catch (error) {
        console.log(error);
      }
    };

    handleGetPosts();
  }, [counter]);

  return (
    <div className="home">
      <div className="container">
        <h1>{title}</h1>
        <button onClick={handleIncreaseCounter}>Increase Counter</button>
        <h3>{counter}</h3>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <h1>List of Posts:</h1>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default Home;
