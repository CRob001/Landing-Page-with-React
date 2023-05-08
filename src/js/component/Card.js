import React from "react";

const Card = (props) => {
const { title, content, src } = props;

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
      <img src={ src } className="card-img-top" alt="pic" />
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p className="card-text">{ content }</p>
        </div>
      </div>
    </div>
  );
};

export default Card;