import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import moment from "moment";

import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDispatch } from "react-redux";
import "./style.css";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  const [likeCount, setLikeCount] = useState(0);

  const likeCountHandler = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <Card className="card">
      <CardMedia
        className="media"
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div className="overlay">
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className="overlay2">
        <Button
          style={{ color: "black" }}
          size="small"
          onClick={() => setCurrentId(post.id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className="details">
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags}
        </Typography>
      </div>
      <Typography className="title" gutterBottom variant="h5" component="h2">
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <Button
          size="small"
          color="primary"
          onChange={likeCountHandler}
          onClick={() => dispatch(likePost(post.id))}
        >
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post.id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
