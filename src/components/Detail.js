import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import db from '../firebase';

const Detail = () => {
    const [detailData,setDetailData] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        db.collection("movies").doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                setDetailData(doc.data());
            } else {
                console.log("No such movie in firestore!");
            }
        }).catch((error) => {
            console.log("Error fetching movies:", error);
        });
    },[id])


    return (
        <Container>
            <Background>
                <img 
                    alt={detailData.title} 
                    src={detailData.backgroundImg} />
            </Background>
            <ImageTitle>
                <img alt={detailData.title}
                    src={detailData.titleImg}
                />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src='/images/play-icon-black.png' alt=''/>
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src='/images/play-icon-white.png' alt=''/>
                        <span>Trailer</span>
                    </Trailer>
                    <AddItem>
                        <span/>
                        <span/>
                    </AddItem>
                    <GroupWatch>
                        <div>
                            <img src='/images/group-icon.png'/>
                        </div>
                    </GroupWatch>
                </Controls>
                <Subtitle>
                    {detailData.subTitle}
                </Subtitle>
                <Description>
                    {detailData.description}
                </Description>
            </ContentMeta>
        </Container>
    )
}

const Container = styled.main`
    position:relative;
    display:block;
    top:72px;
    padding: 0 calc(3.5vw + 5px);
    overflow-x:hidden;
    min-height:calc(100vh - 250px);
`

const Background = styled.div`
    position:fixed;
    left:0;
    opacity:0.8;
    top:0;
    z-index:-1;
    
    img{
        width:100vw;
        height:100vh;
        @media(max-width:768px){
            width:initial;
        }
    }
`

const ImageTitle = styled.div`
    display:flex;
    margin:0 auto;
    height:30vw;
    min-height:170px;
    padding-bottom:24px;
    width:100%;
    -webkit-box-pack:start;
    align-items:flex-end;
    justify-content:flex-start;
    img{
        max-width:600px;
        min-width:200px;
        width:35vw;
    }
`

const ContentMeta = styled.div`
    // border:1px solid red;
    max-width:874px;
`

const Controls = styled.div`
    display:flex;
    align-items:center;
    // border:1px solid blue;
    min-height:56px;
    margin:24px 0;
`

const Player = styled.button`
    display:flex;
    align-items:center;
    text-transform:uppercase;
    border-radius:4px;
    border:0;
    font-size:16px;
    margin:0px 22px 0 0;
    text-align:center;
    height:56px;
    cursor:pointer;
    letter-spacing:1.8px;
    color:rgb(0,0,0);
    background:rgb(249,249,249);
    padding:0 24px;
    
    img{
        width:32px;
    }
    &:hover{
        background:rgb(198,198,198);
    }
    @media(max-width:768px){
        height:45px;
        font-size:14px;
        padding:0 22px;
        margin:0px 10px 0 0;
    img{
        width:25px;
        }
    }
`

const Trailer = styled(Player)`
    background:rgba(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
`

const AddItem = styled.div`
    width:44px;
    height:44px;
    background:rgba(0,0,0,0.6);
    border-radius:50%;
    margin:0 22px 0 0;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    span{
        background-color:rgba(249,249,249);
        display:inline-block;
        &:first-child{
            height:2px;
            width:16px;
            transform:translate(1px,0px) rotate(0deg);
        }
        &:nth-child(2){
            height:16px;
            width:2px;
            transform:translateX(-8px) rotate(0deg);
        }
    }
`

const GroupWatch = styled.div`
    width:44px;
    height:44px;
    background:rgba(0,0,0,0.3);
    border-radius:50%;
    border:2px solid rgb(249,249,249);
    cursor:pointer;
    display:flex;
    align-items:center;
    justiify-content:center;
    div{
        width:40px;
        height:40px;
        background:black;
        border-radius:50%;
        img{
            width:100%;
        }
    }
   
`

const Subtitle = styled.div`
    font-size:15px;
    color:rgb(249,249,249);
    min-height:20px;
    @media(max-width:768px){
        font-size:12px;
    }
`;

const Description = styled.div`
    padding:15px 0;
    font-size:16px;
    color:rgb(249,249,249);
    line-height:1.4;
    @media(max-width:768px){
        font-size:14px;
    }
`;

export default Detail;
