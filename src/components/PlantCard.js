import React, {useState} from "react";

function PlantCard({plant:{id,name,image,price}}) {
  const [inStock, setInStock] = useState(true);
  const handleButtonClick = () => setInStock(!inStock);
  
  return (
    <li className="card" data-testid={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick ={handleButtonClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleButtonClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
