import React, {useState}from 'react'
import Animal from './Animal'
import App from './App.css'

function getRandomAnimal(){
    const animals=['bird','cat', 'cow', 'gator','horse'];
    return animals[Math.floor(Math.random()*animals.length)]
}
console.log(getRandomAnimal())
const AnimalShow = () => {
    const[animals,setAnimals]=useState([])
    // const [count, setCount] = useState(0)
   const handleClick=()=>{
        setAnimals([...animals, getRandomAnimal()])
    }
    const renderedAnimals=animals.map((animal, index)=>{
        return <Animal type={animal} key={index}/>;
    });
  return (
    <div>
        <button type="submit" onClick={handleClick}>Add Animal
        </button>
        <div>{renderedAnimals}</div>
    </div>
  )
}

export default AnimalShow
// Bhagyashri_BNB
//Bhagya@#27