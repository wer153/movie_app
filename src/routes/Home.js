import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Movie from '../components/Movie/Movie.js'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movieData, setMovieData] = useState([])
  const [page, setPage] = useState(0)

  const url = `https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page=${page}`
  const getMoviesData = async () => {
    setPage(prev=>prev+1)
    const {data: { data:{movies}}} = await axios.get(url)

    setMovieData(movies)
    setIsLoading(false)
  }

  useEffect(() => {
    getMoviesData()
  }, [isLoading])
  
  return (
    <HomeContainer>
      {isLoading ? (
        <div className='loader'>
          <span>'Loading'</span>
        </div> //will apply spinner instead
      ) : (
        <Movies>
          {console.log(movieData[0])}
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
              rating={movie.rating}
            />)})}
        </Movies>
      )
    }
    </HomeContainer>
  );
}

const HomeContainer = styled.section`
  width:90vw;
  display:flex;
  align-items: center;
  justify-content: center;
  /* overflow:hidden; */
`

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
`
export default Home;
