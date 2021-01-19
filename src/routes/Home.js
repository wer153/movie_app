import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Movie from '../components/Movie/Movie.js'
import './Home.css'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movieData, setMovieData] = useState([])

  const url = 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
  const getMoviesData = async () => {
    const {data: { data:{movies}}} = await axios.get(url)
    setMovieData(movies)
    setIsLoading(false)
    console.log(movies)
  }
  useEffect(() => {
    getMoviesData()
  }, [isLoading])
  
  return (
    <section className='container'>
      {isLoading ? (
        <div className='loader'>
          <span>'Loading'</span>
        </div>
      ) : (
        <div>
        {/* {console.log(movieData[0])} */}
          {movieData.map(movie=>(
            <Movie 
              key={movie.id} 
              id={movie.id}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />))}
        </div>
      )
    }
    </section>
  );
}

export default Home;
