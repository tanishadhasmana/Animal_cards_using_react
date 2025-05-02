import React, { useState } from 'react';
import Usercard from "./Components/Usercard"
import catImg from './assets/cat.jpg'; //assets se ek folder or andr img h, so ek or dot lgana pda
import dogImg from './assets/dog.jpg';
import rabbitImg from './assets/rabit.jpg';


function App() {
  const animals = [
    { name: "Cat", image: catImg },
    { name: "Dog", image: dogImg },
    { name: "Rabbit", image: rabbitImg }
  ];

  const [index, setIndex] = useState(0);  // starts with 0 => Cat

  const handleNext = () => {
    setIndex((index + 1) % animals.length);  // cycles 0 → 1 → 2 → 0
  };
 
  return (
    <div>
    
{/*    
     <Usercard name="Cat" image={catImg}/>
     <Usercard name="Dog" image={dogImg}/>
     <Usercard name="Rabit" image={rabbitImg}/>
      */}

       {/* if u want that on click whole page is render with new next card for that we use , useState, means state variable */}

       <Usercard
        name={animals[index].name}
        image={animals[index].image}
        onClick={handleNext}
      />
    </div>
    
);
}

export default App
