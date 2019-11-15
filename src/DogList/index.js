import React from 'react';
import { Card, Button} from 'semantic-ui-react';

function DogList(props){

  const dogs = props.dogs.map((dog) => {
    return (
        <Card key={dog.id}>
          <Card.Content>
            <Card.Header>{dog.name}</Card.Header>
            <Card.Description>{dog.breed}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={() => props.deleteDog(dog.id)}>DeleteDog</Button>
            <Button onClick={() => props.openAndEdit(dog)}>Edit Dog</Button>
          </Card.Content>
        </Card>
        )
  })

  return (
      <Card.Group>
        { dogs }
      </Card.Group>
    )
}

export default DogList
