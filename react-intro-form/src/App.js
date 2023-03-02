
import MovieForm from './MovieForm'
import Table from './Table'
import Search from './Search'
import {useEffect, useState} from 'react'


function App ()  {
    

const [movies, setMovies] = useState({});

// use effect runs after a component has been rendered
  useEffect(()=>{

    fetch("https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json")
    .then((response) => response.json())
    .then((response) => {
      setMovies(response)
  });

  }, [])
     




    //   const movieData = [
    //     {
    //       title: "The Godfather",
    //       actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    //       plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    //       genre: "Crime, Drama",
    //       imdbRating: 9.2,
    //       director: "Francis Ford Coppola",
    //       year: 1972,
    //     },
    //     {
    //       title: "The Shawshank Redemption",
    //       actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    //       plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    //       genre: "Drama",
    //       imdbRating: 9.3,
    //       director: "Frank Darabont",
    //       year: 1994,
    //     },
    //     {
    //       title: "The Dark Knight",
    //       actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    //       plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    //       genre: "Action, Crime, Drama",
    //       imdbRating: 9.0,
    //       director: "Christopher Nolan",
    //       year: 2008,
    //     },
    //     {
    //       title: "Pulp Fiction",
    //       actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    //       plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    //       genre: "Crime, Drama",
    //       imdbRating: 8.9,
    //       director: "Quentin Tarantino",
    //       year: 1994,
    //     },
    //     {
    //       title: "The Lord of the Rings: The Return of the King",
    //       actors: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    //       plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    //       genre: "Action, Adventure, Drama",
    //       imdbRating: 8.9,
    //       director: "Peter Jackson",
    //       year: 2003,
    //     },
    //     {
    //       title: "Forrest Gump",
    //       actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    //       plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    //       genre: "Drama, Romance",
    //       imdbRating: 8.8,
    //       director: "Robert Zemeckis",
    //       year: 1994,
    //     },
    //     {
    //       title: "Inception",
    //       actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    //       plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    //       genre: "Action, Adventure, Sci-Fi",
    //       imdbRating: 8.7,
    //       director: "Christopher Nolan",
    //       year: 2010,
    //     },
    //     {
    //       title: "The Matrix",
    //       actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    //       plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    //       genre: "Action, Sci-Fi",
    //       imdbRating: 8.7,
    //       director: "Lana Wachowski, Lilly Wachowski",
    //       year: 1999,
    //     },
    //     {
    //       title: "Schindler's List",
    //       actors: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
    //       plot: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    //       genre: "Biography, Drama, History",
    //       imdbRating: 8.9,
    //       director: "Steven Spielberg",
    //       year: 1993,
    //     },
    //     {
    //       title: "Goodfellas",
    //       actors: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    //       plot: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    //       genre: "Crime, Drama",
    //       imdbRating: 8.7,
    //       director: "Martin Scorsese",
    //       year: 1990,
    //     },
    // ]

    //useStates
    
    const [searchInput, setSearchInput] = useState({});
    const [searchField] = useState("title");
    



function handleSearch () {
     
    
  const movieFilter = movies.filter((movie) => {
    
    return movie[searchField].toLowerCase().includes(searchInput.toLowerCase())

})
  setMovies(movieFilter)
  
}




function handleChange (event) {
  
  event.preventDefault()
  setSearchInput(event.target.value);

  
};



const removeMovie  = (index) => {
    //now that we've defined this.state, we can use 
       
            const filteredMovies = movies.filter((_, i) => {
                return i !== index
            })
            setMovies(filteredMovies)
        }
     

    
   


    

const addMovie = (movie) => {
        
    setMovies([...movies, movie ])
  }


    
    
        
         
        return (
    <div className='App'>
       <h1>Movie Form</h1>
        <MovieForm addMovie ={addMovie}/>
        <Table movieData={movies} 
        removeMovie = {removeMovie} />
        <Search movieData ={movies} handleSearch = {handleSearch} handleChange = {handleChange}/>
       
        
    </div>
    
        )
    



}
export default App

