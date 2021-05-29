import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectTrending } from '../features/movie/movieSlice';


const Trending = () => {
    const trendings = useSelector(selectTrending);
    return (
        <Container>
            <h4>Trending</h4>
            <Content>
             {
                    trendings && trendings.map((trending,key) => (
                        <Wrap key={key}>
                            <Link to={`/details/${trending.id}`}>
                                <img src={trending.cardImg} alt={trending.title}/>
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

const Container = styled.div`
       padding:0 0 26px;
`
const Content = styled.div`
    display:grid;
    grip-gap:25px;
    gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
    @media (max-width:768px){
        grid-template-columns:repeat(2,minmax(0,1fr));
    }
`

const Wrap = styled.div`
    padding-top:56%;
    border:3px solid rgba(249,249,249,0.1);
    position:relative;
    overflow:hidden;
    border-radius:10px;
    cursor:pointer;
    box-shadow:rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    img{
        position:absolute;
        display:block;
        inset:0;
        height:100%;
        opacity:1;
        object-fit:cover;
        width:100%;
        // transition:opacity 500ms ease-in-out 0s;
    }
    &:hover{
            transform:scale(1.05);
            border:1px solid white;
        }

`;

export default Trending
