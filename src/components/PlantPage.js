import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  
  fetch('http://localhost:6001/plants')
  .then(response=>response.json())
  .then(plantResponse =>{
    setPlants(plantResponse)
  })
  
  const [searchPlant, setSearchPlant] = useState("")
  const handleSearchInput = (e) => {setSearchPlant(e.target.value); console.log(e.target.value);}

  //NEW PLANT FORM
  const [plantName, setPlantName] = useState("");
  const handlePlantName = (e) => setPlantName(e.target.value);
  
  const [plantImage, setPlantImage] = useState("");
  const handlePlantImage = (e) => setPlantImage(e.target.value);
  
  const [plantPrice, setPlantPrice] = useState(0);
  const handlePlantPrice = (e) => setPlantPrice(e.target.value);

  //https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/english/wall-2018-whatareplantsmp4.transform/content-tile-large/image.png

//POST REQUEST
  const handleNewSubmit = (e) =>{
    e.preventDefault();
    
    const newPlantObj ={
      id: plants.length+1,
      name: plantName,
      image: plantImage,
      price: parseFloat(plantPrice)
    }
    const postObj = {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(newPlantObj)
    };
    
    fetch('http://localhost:6001/plants', postObj)
    .then(response=>response.json())
    .then(newPlant => console.log(`${newPlant.name} posted successfully!`))
  }

  return (
    <main>
      <NewPlantForm 
        plantName={plantName}
        handlePlantName={handlePlantName}
        plantImage={plantImage}
        handlePlantImage={handlePlantImage}
        plantPrice={plantPrice}
        handlePlantPrice={handlePlantPrice}
        handleNewSubmit={handleNewSubmit}
      />
      <Search handleSearchInput={handleSearchInput} searchPlant={searchPlant}/>
      <PlantList plants = {plants} searchPlant={searchPlant}/>
    </main>
  );
}

export default PlantPage;
