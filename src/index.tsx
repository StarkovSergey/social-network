import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};
export type DialogType = {
  id: number;
  name: string;
};
export type MessageType = {
  id: number;
  message: string;
};

const posts: Array<PostType> = [
  { id: 1, message: "Hi, how are your?", likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 5 },
  { id: 3, message: "Cat!", likesCount: 5 },
];

const dialogs: Array<DialogType> = [
  { id: 1, name: "Brendan" },
  { id: 2, name: "Milada" },
  { id: 3, name: "Vera" },
  { id: 4, name: "Vita" },
  { id: 5, name: "Maks" },
  { id: 6, name: "Viktoria" },
];

const messages: Array<MessageType> = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How is your morris?" },
  { id: 3, message: "Любо!" },
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById("root")
);
