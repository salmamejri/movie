import {useState} from 'react';
import './App.css';
import MovieList from './Component/MovieList.js'
import Filter from './Component/Filter.js'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const[movie,setMovie]=useState(
    [
      {
        id:Math.floor(Math.random() * 10),
       title:"no time to die ",
       rate:5,
       description :"in no time to die ,bond has left active service and is enjoying a tranquil life in jamaiva hispeace is short-lives when his old friends felix leiter from the cia turns up asking for helps.",
        img:"https://img.over-blog-kiwi.com/0/95/30/84/20191204/ob_7fcd5b_ek3s5ojwoaazrle.jpg"
        },
        {
          id:Math.floor(Math.random() * 10),
         title:"Bad Boys",
         rate:5,
         description :"est une comédie policière américaine réalisée par Michael Bay, sortie en 1995. Il s'agit du premier volet d'une franchise qui se poursuit en 2003 avec Bad Boys 2 et Bad Boys for Life, sorti en 2020.",
          img:"https://resizing.flixster.com/sTCbx82_mIuzzi58EYMYNuk0fPk=/180x267/v1.bTsxMzI3ODg1OTtqOzE4NzI3OzIwNDg7NjA3Mjs5MDAw"
          },
          {
            id:Math.floor(Math.random() * 10),
           title:"no time to die ",
           rate:5,
           description :"in no time to die ,bond has left active service and is enjoying a tranquil life in jamaiva hispeace is short-lives when his old friends felix leiter from the cia turns up asking for helps.",
            img:"https://img.over-blog-kiwi.com/0/95/30/84/20191204/ob_7fcd5b_ek3s5ojwoaazrle.jpg"
            },


    ]

  );
  const[ keyrate,setkeyrate]=useState(0)
  const[ keyword,setkeyword]=useState("");
  const search =(word)=>{
    setkeyword(word);

  }
  const addMovie = (movies)=>{
    setMovie(movie.concat (movies));

  };
  return (
    <div className="App-header">
      <Filter  keyrate={keyrate} setkeyrate={setkeyrate} search={search}/>
    <MovieList movie={movie.filter((movie)=>movie.rate>=keyrate&& movie.title.includes(keyword))} addMovie={addMovie}/>
    </div>
  );
}

export default App;
