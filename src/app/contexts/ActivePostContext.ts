import { createContext } from "react";
import { BlogPost } from "../types";

interface ActivePostContextType {
  activePost: BlogPost | null;
  setActivePost: (post: BlogPost) => void
}

export const ActivePostContext = createContext<ActivePostContextType|null>(null);