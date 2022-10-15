import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Spline from '@splinetool/react-spline';

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {
  return (
    <div className="app">
           <Spline scene="https://prod.spline.design/Wjc9iOjkrF5Y72XK/scene.splinecode" />

    </div>
  );
}

function Button({ className, text, url = "#" }) {
  return (
    <a
      href={url}
      className={`${className} py-3 px-6 bg-purple-400 hover:bg-purple-300 text-purple-800 hover:text-purple-900 block rounded text-center shadow flex items-center justify-center leading-snug text-xs transition ease-in duration-150`}
    >
      {text}
    </a>
  );
}
