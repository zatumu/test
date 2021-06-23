import React from 'react';
import ReactDOM from 'react-dom';
import 'minireset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  {
    title:"大乱闘スマッシュブラザーズシリーズ",
    date: "2099.99.99",
    url: "google.com"
  },
  {
    title:"メトロイド",
    date: "2099.99.99",
    url: "google.com"
  }
]

const works = [
  {
  title: "オポッサム",
  roles:["哺乳類","なのか"],
  imageurl:"/work.png"
},
{
title: "くじら",
roles:["哺乳類","なのか"],
imageurl:"/work.png"
}
]



ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} works={works}/>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
