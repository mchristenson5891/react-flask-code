import React from 'react'
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';


const EditDogModal = (props) => {
  console.log(props)
  return (
    <Modal open={props.open}>
      <Header>Edit Dog</Header>
      <Modal.Content>
        <Form onSubmit={props.closeAndEdit}>
          <Label>
            Name:
          </Label>
          <Form.Input type='text' name='name' value={props.dogToEdit.name} onChange={props.handleEditChange}/>
          <Label>
            Breed:
          </Label>
          <Form.Input type='text' name='breed' value={props.dogToEdit.breed} onChange={props.handleEditChange}/>
          <Label>
            Owner:
          </Label>
          <Form.Input type='text' name='owner' value={props.dogToEdit.owner} onChange={props.handleEditChange}/>
          <Modal.Actions>
            <Button color='green' type='submit'>Edit Dog</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
    )
}

export default EditDogModal;
