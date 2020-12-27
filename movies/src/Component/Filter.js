import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

function Filter({keyrate,setkeyrate,search}) {
     
   const onStarClick=(nextValue)=> {
    setkeyrate(nextValue);
  }
    return (
        <div>
          <input type="text" placeholder="search for a movie" onChange={(e)=>search(e.target.value)}></input>  
          <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={keyrate}
          onStarClick={onStarClick}
          starColor={"red"} 
    emptyStarColor={"white"} 
        />
        </div>
    )
}

export default Filter
