import React from "react";

function NewPlantForm({plantName, handlePlantName, plantImage, handlePlantImage, plantPrice, handlePlantPrice, handleNewSubmit}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handlePlantName} value={plantName}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handlePlantImage} value={plantImage}/>
        <input type="number" name="price" step="1.00" placeholder="Price" onChange={handlePlantPrice} value={plantPrice} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
