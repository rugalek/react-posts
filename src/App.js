import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TweetCard } from './components/TweetCard/';

// function App() {
//   return (
//     <div className="App">
//      <TweetCard  name={'Dan'} nickName={'@danabramov'} date={'7 sept'} post={'This is the house that Jack build'} avatarUrl={'https://cs4.pikabu.ru/post_img/big/2014/03/10/8/1394454552_550758746.png'} replyCount={10} retweetCount={5} likes={4}/>
//     </div>
//   );
// }

const tweets = [
  {
    name: "Dan",
    nickName: "@dan_abramov",
    date: "7 Sep",
    post: "asdfasdfasdfasdf",
    avatarUrl:
      "https://static.toiimg.com/thumb/msid-67586673,widt…de-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg",

    replyCount: 12,
    retweetCount: 10,
    likes: 10,
  },
  {
    name: "Dan",
    nickName: "@dan_abramov",
    date: "7 Sep",
    post: "Woke up from a vivid dream about the people from the first team i worked on. As if we’re working on something else now. I was the youngest, and there was this sense… like i want to earn their respect. Like hey, look. I can do this too. See? And they’re like yea, you’re right.",
    avatarUrl:
      "https://static.toiimg.com/thumb/msid-67586673,widt…de-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg",

    replyCount: 12,
    retweetCount: 10,
    likes: 10,
  },
  {
    name: "Dan",
    nickName: "@dan_abramov",
    date: "7 Sep",
    post: "ashdfklahskldfhakljsdhflkjhasdkl",
    avatarUrl:
      "https://static.toiimg.com/thumb/msid-67586673,widt…de-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg",

    replyCount: 12,
    retweetCount: 10,
    likes: 10,
  },
];

function App() {
  return (
    <div className="App">
      {tweets.map((tweet) => {
        const {
          name,
          nickName,
          date,
          post,
          avatarUrl,
          replyCount,
          retweetCount,
          likes,
        } = tweet;

        return (
          <TweetCard
            name={name}
            nickName={
              nickName
            }
            date={date}
            post={post}
            avatarUrl={
              avatarUrl
            }
            replyCount={
              replyCount
            }
            retweetCount={
              retweetCount
            }
            likes={likes}
          />
        );
      })}
    </div>
  );
}

export default App;
