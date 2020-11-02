import React from "react";
import "./homeInfoStyle.css";
import { Link } from "react-router-dom";


function HomeInfo() {
  return (
    <main role="main" className="inner cover">
      <h1 className="cover-heading">Welcome to my portfolio!</h1>
      <p className="lead">
        I am a Full stack web developer with public relations education and a certificate in full stack development from University of California Irvine, 
        with an understanding of Javascript, CSS, Node.js, MySQL, Express, MongoDB, and React while still looking to expand my knowledge base. 
      </p>
      <p className="lead">
        <Link to="/projects" className="btn btn-lg btn-secondary">Go to Projects</Link>
      </p>
    </main>
  )
}

export default HomeInfo;