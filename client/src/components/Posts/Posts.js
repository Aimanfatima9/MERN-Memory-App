import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

const Posts = ({ setCurrentId }) => {
  // const [posts, setPosts] = useState();

  let posts = useSelector((state) => state.posts);

  useEffect(() => {
    console.log(posts);
    if (posts.length !== 0) {
      console.log(posts);
    }
  }, [posts]);
  return !posts ? (
    <CircularProgress />
  ) : (
    <Grid className="container" container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
