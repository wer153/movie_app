import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Movie from '../components/Movie/Movie.js'
import './Home.css'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movieData, setMovieData] = useState([])

  const url = 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
  const getMoviesData = async () => {
    const {data: { data:{movies}}} = await axios.get(url)

    
    await setMovieData(movies)
    await setIsLoading(false)
  }

  useEffect(() => {
    getMoviesData()
  }, [isLoading])
  
  return (
    <section className='container'>
      {isLoading ? (
        <div className='loader'>
          <span>'Loading'</span>
        </div> //will apply spinner instead
      ) : (
        <Movies>
          {/* {console.group(movieData)} */}
          {movieData.map(movie=>{
            if(2021<=movie.year){
              return null
            }
            return(
            <Movie 
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              largePoster={movie.large_cover_image}
              background={movie.background_image}
              genres={movie.genres}
            />)})}
        </Movies>
      )
    }
    </section>
  );
}

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
`
export default Home;
