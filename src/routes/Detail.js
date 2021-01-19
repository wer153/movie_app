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
        <HeaderPoster url = {movieData.poster}/>

        <MainContainer>
            <Poster src = {movieData.poster}/>
            <ContentContainer>
                <h3>{movieData.title}</h3>
                <p>year:{movieData.year}</p>
                {/* <ul>
                    {movieData.genres.map((genre, index)=><li key={index}>{genre}</li>)}
                </ul> */}
                <p>{movieData.summary}</p>
            </ContentContainer>
        </MainContainer>
    </BackgroundContainer>
    )
}

const BackgroundContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100vw;
    height:100vh;
    
`

const MainContainer = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    width:80vw;
    height:80vh;
    background-color: gray;
`
const HeaderPoster = styled.div`
    position:absolute;
    top:0;
    background-image: url(${props=>props.url});
    width: 100vw;
    height: 20vh;
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
    background:white;
    margin: 40px;
    height:60%;
`
export default Detail