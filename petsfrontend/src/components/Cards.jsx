import React from "react";
import Card from "./Card";

const Cards = ({ pets }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 content-center gap-10 md:grid-cols-2 lg:grid-cols-3 p-5">
        {pets.map((pet) => (
          <Card key={pet._id} _id={pet._id} name={pet.name} age={pet.age} image={pet.image} race={pet.race} size={pet.size} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
