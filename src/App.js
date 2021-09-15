import React from "react";
import "./App.css";
import { TweetCard } from "./components/TweetCard/";
import { FbCard } from "./components/Facebook";
import { Counter } from "./components/Counter";

const fbPosts = [
  {
    name: "Миша Шуф",
    edu: "Школа вокала 13",
    online: "3 сентября",
    text: "Я календарь переверну...",
    avatarUrl:
      "https://memepedia.ru/wp-content/uploads/2017/09/michael_shufutinsky2.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <h1
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "10px",
        }}
      >
        Facebook
      </h1>
      {fbPosts.map((post, index) => {
        const { avatarUrl, name, edu, text, online } = post;
        return (
          <FbCard
            key={index}
            name={name}
            avatarUrl={avatarUrl}
            edu={edu}
            text={text}
            online={online}
          />
        );
      })}
    </div>
  );
}

export default App;
