import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-orange dib br3 grow  pa3 ma2 bw2 shadow-5">
      <img alt="bleb" src={id} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
