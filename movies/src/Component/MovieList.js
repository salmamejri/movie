import React,{useState} from 'react'
import AddMovie from './AddMovie';
import MovieCard from "./MovieCard"

function MovieList({movie,addMovie }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <button onClick={handleShow}>Add Movie</button>
            <AddMovie handleClose={handleClose} show={show} addMovie={addMovie}/>
            <div style={{display:"flex", flexWrap:"wrap"}}>
        {movie.map((el,i)=> (<MovieCard movie={el} key ={i}/>))}
    </div>
    </div>
    )
}

export default MovieList
