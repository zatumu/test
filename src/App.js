import "./App.css";

import React from "react";
import {Helmet} from "react-helmet";
import * as styles from "./App.module.css";
import Layout from "./Layout";
import PostItem from "./PostItem";
import WorkItem from "./WorkItem";

const App = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>My Site</title>
        <meta name="description" content="My first react website"/>
      </Helmet>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.profile}>なんかおいらはすっげぇぞ</p>
      <h2 className={styles.heading}>Posts</h2>
      {props.posts.map((post) => {
        return <PostItem post={post} key={post.title} />;
      })}
      <h2 className={styles.heading}>Works</h2>
      <div className={styles.workItems}>
        {props.works.map((work)=>{
          return <WorkItem work={work} key={work.name}/>;
        })}
        </div> 
    </Layout>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           おっぱい
//         </a>
//         <Hello name="おっぱい"/>
//       </header>
//     </div>
//   );
// }

export default App;
