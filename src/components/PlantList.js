import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchPlant}) {
  const filteredPlants = plants.filter((plant)=>{
    return plant.name.toLowerCase().includes(searchPlant)
  })
  
  const plantCardElement = filteredPlants.map(plant=>{
    return <PlantCard key = {plant.id} plant={plant}/>
  })
  
  return (
    <ul className="cards">{plantCardElement}</ul>
  );
}

export default PlantList;
