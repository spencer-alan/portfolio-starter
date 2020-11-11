import React from "react";
import "./jumbotron.css";

function Jumbotron() {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1>Projects</h1>
        <p className="lead text-muted">Welcome to my projects page! Here you will find a collection of projects that I have worked on with a link to see the deployed applications for yourself.</p>
        <p>
          <a href="#" className="btn btn-secondary my-2">Github Page</a>
        </p>
      </div>
    </section>
  );
};

export default Jumbotron;
