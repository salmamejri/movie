import React,{useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import MovieCard from "./MovieCard"

function AddMovie({handleClose,show ,addMovie}) {
    const [newMovie,setnewMovie] = useState(
        {
            id:Math.floor(Math.random() * 10),
           title:"",
           rate:"",
           description :"",
            img:""
        }
    );
    const handlechange =(e)=>{
       setnewMovie({...newMovie,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group >
    <Form.Label>movie Title</Form.Label>
    <Form.Control type="text" placeholder="Enter movie title" name="title" onChange={handlechange}/>
    <Form.Label>movie description</Form.Label>
    <Form.Control type="text" placeholder="Enter a movie description"name="description" onChange={handlechange} />
    <Form.Label>movie poster</Form.Label>
    <Form.Control type="text" placeholder="Enter a url for the poster"name="img" onChange={handlechange} />
    <Form.Label>rate movie</Form.Label>
    <Form.Control type="text" placeholder="Enter the rate of the movie" name="rate" onChange={handlechange}/>



    
  </Form.Group>
</Form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
              handleClose()
              addMovie(newMovie)
          }}>
           Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie
