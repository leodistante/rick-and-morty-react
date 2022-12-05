import React from "react";
import "./index.css"

const Post = React.forwardRef(({ post }, ref) => {
  const postBody = (
    <div className="post">
      <h2>{post.name}</h2>
      <img className="image" src={post.image} alt={post.id}/>
      <p className="label">Species: {post.species}</p>
      <p className="label">Origin: {post.origin.name}</p>
    </div>
  );

  const content = ref ? (
    <article ref={ref}>{postBody}</article>
  ) : (
    <article>{postBody}</article>
  );

  return content;
});

export default Post;
