import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Movie = ({id, year, title, summary, poster, genres}) => {
    const summaryLength = 100
    return  (
        <Link to= {{  pathname:`/movie/${id}`,
                    state:{year,title,summary,poster,genres}
                }}
        >
            <div className='movie'>
                {/* {console.log(id, year, title, summary, poster, genres)} */}
                <img src={poster} alt='{title}' title={title}/>
                <div className='movie_data'>
                    <h4 className='movie_title'>{title}</h4>
                    <p className='movie_year'>year:{year}</p>
                    <ul className='genres'>
                        {genres.map((genre, index)=><li className='genres_genre' key={index}>{genre}</li>)}
                    </ul>
                    <p className='movie_summary'>{summary.slice(0,summaryLength)+"..."}</p>
                    
                </div>
            </div> 
        </Link>
        )
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie