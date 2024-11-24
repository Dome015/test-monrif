"use client";
import { useEffect, useState } from "react";
import { BlogPost } from "./types";
import PostPreview from "./components/PostPreview/PostPreview";
import React from "react";

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/posts");
        const result = await response.json() as BlogPost[];
        result.length = 5;
        setPosts(result);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [])

  return (
    <>
    <div className="p-4 pb-0 pt-3 fs-5">Welcome to MyBlog! Here's a selection of interesting posts...</div>
    {loading && <div className="p-4">Loading...</div>}
    {error && <div className="p-4">An error has occured, try refreshing the page.</div>}
    {!loading && !error && posts.map(
      post => <PostPreview post={post} key={post.id} />
    )}
    </>
  )
}