import React from "react";
import "./card.css";

// All projects will be in card form under the Jumbotron of feature project
function Card({ screenshot, github, deployed }) {
  return (
    <div className="card mb-4 shadow-sm">
      <svg 
        className="bd-placeholder-img card-img-top" 
        width="100%" height="225" 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="xMidYMid slice" 
        focusable="false" 
        role="img" 
        aria-label="Placeholder: Thumbnail"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"/>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
      </svg>
      <div className="card-body">
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">Github</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Deployed</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;