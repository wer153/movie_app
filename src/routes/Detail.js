import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Detail = props => {
    const [movieData, setMovieData] = useState({})
    useEffect(()=>{
        const {history, location} = props
        if(location.state === undefined){
            history.push('/')
        }
        setMovieData(location.state)
    },[props])

    return (
    <BackgroundContainer>
        {console.log(movieData)}
        <BackgroundPoster url = {movieData.background}/>
        <BackgroundPoster url = {movieData.background}/>
        <MainContainer>
            <Poster src = {movieData.largePoster}/>
            <ContentContainer>
                <Title>{movieData.title}  </Title>
                <Genres>
                { movieData.genres && 
                movieData.genres.map((genre, index)=><Genre key={index}>{genre}</Genre>)}
                </Genres>
                <Paragraph>Rating:{movieData.rating}</Paragraph>
                <Paragraph>Year:{movieData.year}</Paragraph>
                <Paragraph>{' '+movieData.summary}</Paragraph>

            </ContentContainer>
            <ReviewContainer>
                hello
            </ReviewContainer>
        </MainContainer>
    </BackgroundContainer>
    )
}

const BackgroundContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:85vw;
    height:85vh;
    margin:5vh auto;
`

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:20vh;
    width:90vw;
    height:70vh;
    padding:30px;
`



const BackgroundPoster = styled.div`
    position:absolute;
    top:0;
    background-image: url(${props=>props.url});
    width: 100vw;
    height: 30vh;
    background-repeat:no-repeat;
    background-size:cover;
    z-index:-1;
`
const Poster = styled.img`
    flex:0;
    position:relative;
    margin-left: 50px;
    /* position:relative;
    background-image: url(${props=>props.url});
    width:50vw;
    height:200px; */
`

const ContentContainer = styled.div`
    flex:1;
    /* display: flex; */
    /* flex-direction:row; */
    /* align-items: center; */
    justify-content: center;
    background:#404040;
    color:#FFFFFF;
    margin: 40px;
    padding-top: 5vh;
    height:80%;
`

const ReviewContainer = styled.div`
    flex:1;
    /* display: flex; */
    /* flex-direction:row; */
    /* align-items: center; */
    /* justify-content: center; */
    background:#404040;
    color:#FFFFFF;
    margin-right: 40px;
    height:80%;
`
const Title = styled.h4`
    display:flex;
    justify-content: center;
    margin: 0;
    font-weight: 300;
    margin-bottom: 5px;
    font-size: 2rem;
    color: #ffffff;
    font-weight:bold;
`

const Genres = styled.ul`
    list-style: none;
    justify-content: center;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
`

const Genre = styled.li`
    margin-right: 10px;
    font-size: 14px;
    color:#B3B3B3;
`

const Paragraph = styled.p`
    margin: 10px 40px;
    /* padding: 10px; */
    font-weight: 350;
    /* margin-right: 10px; */
    font-size: 17px;
`

export default Detail