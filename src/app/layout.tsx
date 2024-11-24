"use client";
import "@/app/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PropsWithChildren, useState } from "react";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MyFooter from "./components/MyFooter/MyFooter";
import { BlogPost } from "./types";
import { ActivePostContext } from "./contexts/ActivePostContext";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  const [activePost, setActivePost] = useState<BlogPost|null>(null);

  return (
    <html lang="en">
      <body>
        <MyNavbar />
        <div className="main-container">
          <ActivePostContext.Provider value={{ activePost, setActivePost }}>
            {children}
          </ActivePostContext.Provider>
        </div>
        <MyFooter />
      </body>
    </html>
  );
}
