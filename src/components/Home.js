import React, { useEffect } from 'react';
import styled from 'styled-components';
import Imgslider from './Imgslider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import { useSelector, useDispatch } from 'react-redux'
import { selectNewDisney, selectOriginal, selectRecommend, selectTrending,setMovies } from '../features/movie/movieSlice';
import db from '../firebase';
import { selectUserName } from '../features/user/userSlice';

const Home = () => {
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(()=>{
        db.collection('movies').onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                // eslint-disable-next-line default-case
                switch(doc.data().type){
                    case 'recommend':
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        recommends = [...recommends,{ id:doc.id, ...doc.data()}];
                        break;
                     case 'new':
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        newDisneys = [...newDisneys,{ id:doc.id, ...doc.data()}];
                        break;
                     case 'original':
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        originals = [...originals,{ id:doc.id, ...doc.data()}];
                        break;
                     case 'trending':
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        trending = [...trending,{ id:doc.id, ...doc.data()}];
                        break;
                }
            })
            dispatch(setMovies({
                recommend:recommends,
                newDisney:newDisneys,
                original:originals,
                trending:trending
            }));
        })
        // db.collection("movies").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         console.log(doc.data());
        //     });
        // });
    },[userName])
    return (
        <Container>
           <Imgslider/>
           <Viewers/>
           <Recommends/>
           <NewDisney/>
           <Originals/>
           <Trending/>
        </Container>
    )
}
const Container = styled.main`
    position:relative;
    // border:1px solid red;
    // background:url('/images/home-background.png');
    min-height:calc(100vh - 250px);
    overflow-x:hidden;
    display:block;
    top:72px;
    padding:0 calc(3.5vw + 5px);

    &:after{
         background:url('/images/home-background.png') center center /cover no-repeat fixed;
         content:'';
         z-index:-1;
        //  border:1px solid blue;
         position:absolute;
         inset:0px;
        opacity:1;
    }
`;


export default Home
