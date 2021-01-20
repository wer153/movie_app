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

        <MainContainer>
            <Poster src = {movieData.largePoster}/>
            <ContentContainer>
                <h3>{movieData.title}</h3>
                <p>year:{movieData.year}</p>
                {/* <ul>
                    {movieData.genres.map((genre, index)=><li key={index}>{genre}</li>)}
                </ul> */}
                <p>{movieData.summary}</p>
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
    flex-direction:row;
    align-items: center;
    justify-content: center;
    margin-top:20vh;
    width:90vw;
    height:70vh;
    /* background-color: gray; */
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
    /* justify-content: center; */
    /* background:white; */
    margin: 40px;
    height:80%;
`

const ReviewContainer = styled.div`
    flex:1;
    /* display: flex; */
    /* flex-direction:row; */
    /* align-items: center; */
    /* justify-content: center; */
    /* background:white; */
    margin-right: 40px;
    height:80%;
`

export default Detail