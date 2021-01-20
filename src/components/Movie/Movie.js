import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Movie = ({id, year, title, summary, poster, largePoster, genres, background, rating}) => {
    const summaryLength = 100
    return  (
        <LinkToDetail to= {{  pathname:`/movie/${id}`,
                    state:{year,title,summary,largePoster,genres,background, rating}
                }}
        >
            <MovieContainer>
                <ImageContainer src={poster} alt='{title}' title={title}/>
                
                <Title>{title}  </Title>
                <Paragraph>Rating:{rating}</Paragraph>
                <Paragraph>Year:{year}</Paragraph>
                <Genres>
                {genres.map((genre, index)=><Genre key={index}>{genre}</Genre>)}
                </Genres>
                <Paragraph>
                    {summary.length<=summaryLength
                    ?summary
                    :summary.slice(0,summaryLength)+"..."}
                </Paragraph>
            </MovieContainer>
        </LinkToDetail>
        )
}

const LinkToDetail = styled(Link)`
    display: grid;
    /* grid-template-columns: minmax(150px, 1fr) 2fr; */
    grid-gap: 20px;
    text-decoration: none;
    color: inherit;
`

const Paragraph = styled.p`
    margin: 0;
    font-weight: 300;
    margin-right: 10px;
    font-size: 14px;
`

const MovieContainer = styled.div`
    /* background-color: white; */
    background-color: #404040;
    margin-bottom: 70px;
    font-weight: 300;
    padding: 20px;
    border-radius: 5px;
    /* color: #adaeb9; */
    /* color: #b3b3b3; */
    color: #ffffff;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`

const ImageContainer = styled.img`
    position: relative;
    top: -50px;
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`
const Title = styled.h4`
    margin: 0;
    font-weight: 300;
    margin-bottom: 5px;
    font-size: 24px;
    color: #ffffff;
    font-weight:bold;
`

const Genres = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0px;
`

const Genre = styled.li`
    margin-right: 10px;
    font-size: 14px;
`

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie