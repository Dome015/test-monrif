import { ActivePostContext } from "@/app/contexts/ActivePostContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { BlogPost } from "../../types";
import "./PostPreview.css";

interface PostPreviewProps {
  post: BlogPost
}

export default function PostPreview({ post }: PostPreviewProps) {
  const activePostContext = useContext(ActivePostContext);
  const router = useRouter();

  const navigateToPost = () => {
    if (!activePostContext) {
      return;
    }
    activePostContext.setActivePost(post);
    router.push("/post");
  }

  return (
    <div className="preview-container" onClick={navigateToPost}>
      <div className="preview-image-container">
        <img src={post.image} className="preview-image" />
      </div>
      <div className="preview-right-container fs-5">
        <div className="preview-title fs-3">{post.title}</div>
        <div className="preview-separator" />
        <div>{post.excerpt}</div>
        <div className="mt-auto">
          <a className="preview-link">Read more →</a>
        </div>
      </div>
    </div>
  )
}