import React from 'react';


function DogList(props){

  const dogs = props.dogs.map((dog) => {
    return (
        <li key={dog.id}>
          <h6>{dog.name}</h6>
          <span>{dog.breed}</span>
          <button onClick={() => props.deleteDog(dog.id)}>DeleteDog</button>
        </li>)
  })

  return (

      <ul>
        { dogs }
      </ul>

    )
}

export default DogList
