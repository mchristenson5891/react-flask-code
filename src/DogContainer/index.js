import React, { Component } from 'react';
import DogList from '../DogList';
import CreateDogForm from '../CreateDogForm';

class DogContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      dogs: []
    }
  }
  componentDidMount(){
    this.getDogs();
  }
  getDogs = async () => {

    try {
      const dogs = await fetch(process.env.REACT_APP_API_URL + '/api/v1/dogs/');
      const parsedDogs = await dogs.json();
      console.log(parsedDogs);
      this.setState({
        dogs: parsedDogs.data
      })
    } catch(err){
      console.log(err);
    }
  }
  addDog = async (e, dog) => {
    // .bind arguments take presidence over every other argument
    e.preventDefault();
    console.log(dog);

    try {

      // We have to send JSON
      // createdMovie variable will store the response from the express API
      const createdDogResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/dogs/', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(dog),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // we have to turn the response from flask into
      // an object we can use
      const parsedResponse = await createdDogResponse.json();
      console.log(parsedResponse, ' this is response')
      // we are emptying all the dogs that are living in state into a new array,
      // and then adding the movie we just created to the end of it
      // the new dog which is called parsedResponse.data
      this.setState({dogs: [...this.state.dogs, parsedResponse.data]})


    } catch(err){
      console.log('error')
      console.log(err)
    }
    // request address will start with 'http://localhost:9000'
    // becuase after we create it, we want to add it to the dogs array
  }
  deleteDog = async (id) => {

    console.log(id)
    const deleteDogResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/dogs/' + id, {
                                              method: 'DELETE'
                                            });

    // This is the parsed response from dog
    const deleteDogParsed = await deleteDogResponse.json();
    console.log(deleteDogResponse)
    // Now that the db has deleted our item, we need to remove it from state
    this.setState({dogs: this.state.dogs.filter((dog) => dog.id !== id )})

    console.log(deleteDogParsed, ' response from Flask server')
      // Then make the delete request, then remove the dog from the state array using filter
  }
  render(){
    return (
      <React.Fragment>
        <DogList dogs={this.state.dogs} deleteDog={this.deleteDog}/>
        <CreateDogForm addDog={this.addDog}/>
      </React.Fragment>
      )
  }
}

export default DogContainer
