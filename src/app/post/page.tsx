'use client';
import "./page.css";
import { useContext } from "react";
import { BlogPost } from "../types";
import { ActivePostContext } from "../contexts/ActivePostContext";
import { useRouter } from "next/navigation";

interface PostProps {
  post: BlogPost
}

export default function Post() {
  const activePostContext = useContext(ActivePostContext);

  const post = activePostContext?.activePost;

  if (!post) {
    return (<span>Waiting for page...</span>)
  }

  const publishDate = new Date(post.publishDate);
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  }

  return (
    <>
      <div className="p-2 pb-0 header">
        <img src={post.image} className="post-img me-2"></img>
        <div className="post-title-container mt-auto">
          <span className="fs-3 fw-bold">{post.title}</span>
          <span className="fs-6 mt-auto subtitle">Published on {publishDate.toLocaleDateString("en-US", { hour: "2-digit", minute: "2-digit" })}</span>
        </div>
      </div>
      <div className="p-2 fs-5">{post.text}</div>
      <div className="p-2 pt-0"><button className="btn btn-primary fs-5" onClick={navigateToHome}>Home</button></div>
    </>
  );
}