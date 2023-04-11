import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Rajat Agrawal</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>

          <a
            href="https://www.linkedin.com/in/rajat-agrawal-22568a244/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <AiOutlineMail />

          <a href="https://github.com/Rajatjjn" target="_blank">
            {" "}
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End Development</h2>
            <span>
              REACTJS, RECOIL, HTML, CSS, JAVASCRIPT,MATERIAL UI,REACT ROUTER DOM
            </span>
          </li>
          {/* <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li> */}
        </ol>
      </div>
    </div>
  );
}

export default Home;
