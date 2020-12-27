import React from 'react'
import Card from 'react-bootstrap/Card'
import MovieList from "./MovieList";
import StarRatingComponent from 'react-star-rating-component';

function MovieCard({movie}) {
    return (
        <div>
            <Card style={{ width: '12rem', color:"black",margim:"50px 30px" , fontSize:"12"}}>
  <Card.Img variant="top" src={movie.img} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
     {  <StarRatingComponent 
          name="rate1" 
          starCount={8}
          value={movie.rate}
          
        />}
    </Card.Text>
    <Card.Text>
     {movie.description}
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
