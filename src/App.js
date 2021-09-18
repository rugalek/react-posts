import React from "react";
import "./App.css";
import { TweetCard } from "./components/TweetCard/";
import { FbCard } from "./components/Facebook";
import { Counter } from "./components/Counter";
import { OnlinerCard } from "./components/Onliner/OnlinerCard";
import { RabotaCard } from "./components/RabotaBy";

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

const onlinerPosts = [
  {
    section: "ТЕХНОЛОГИИ",
    comments: "565",
    text: "SpaceX отправила на орбиту четырех туристов...",
    backgroundUrl:
      "background-image: url('https://content.onliner.by/news/970x485/40f068b0fcc3d931b08fdc745bb98e0d.jpeg');",
  },
];
const pracaPosts = [
  {
    job: "Junior React.js Engineer (Internship/React.js Lab)",
    company: "ООО АйТиРекс Групп ✓",
    city: "Минск",
    text: "Медицинское обслуживание. Онлайн-ивенты. Реферальная программа. 10+ лет успешной работы на глобальном рынке ИТ-услуг. Какие знания и навыки нужны для старта: Базовые знания HTML...",
    followbtn: "Откликнуться",
    date: "3 сентября",
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
      <h1
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "10px",
        }}
      >
        Onliner
      </h1>
      {onlinerPosts.map((post, index) => {
        const { section, comments, text } = post;
        return (
          <OnlinerCard
            key={index}
            section={section}
            comments={comments}
            text={text}
          />
        );
      })}
      <h1
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "10px",
        }}
      >
        Praca.by
      </h1>
      {pracaPosts.map((post, index) => {
        const { job, company, city, text, followbtn, date } = post;
        return (
          <RabotaCard
            key={index}
            job={job}
            company={company}
            city={city}
            text={text}
            followbtn={followbtn}
            date={date}
          />
        );
      })}
      <h1
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "10px",
        }}
      >
        Instagram
      </h1>
    </div>
  );
}

export default App;
