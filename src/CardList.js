import React from "react";
import Card from "./Card";

const CardList = ({ bs }) => {
  return (
    <div>
      {bs.map((user, i) => {
        return (
          <Card key={i} id={bs[i].id} name={bs[i].name} email={bs[i].email} />
        );
      })}
    </div>
  );
};

export default CardList;
