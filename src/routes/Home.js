import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Movie from '../components/Movie/Movie.js'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movieData, setMovieData] = useState([])
  const [page, setPage] = useState(0)

  const url = `https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page=${page}`
  const fetchMoviesData = async () => {
    setIsLoading(true)
    setPage(page+1)
    const {data: { data:{movies}}} = await axios.get(url)
    console.log( await axios.get(url))
    setMovieData([...movies])
    setIsLoading(false)
  }

  const handleScroll = () => {
    const {scrollTop, clientHeight, scrollHeight} = document.documentElement
    console.log(scrollTop, clientHeight, scrollHeight)
    if(!isLoading && scrollTop + clientHeight >= scrollHeight){
      console.log('fetch!')
      fetchMoviesData()
    }
  }
  useEffect(() => { 
    
    fetchMoviesData()
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      console.log('해제')
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  
  return (
    <div>
      {isLoading ? 
        <div className='loader'>
          <span>'Loading'</span>
        </div> //will apply spinner instead
       : 
        <HomeContainer>
          <Movies>
            {console.log(movieData)}
            {movieData.map(movie=>{
              if(2021<=movie.year){return null}
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
        </HomeContainer>
        }
    </div>
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
