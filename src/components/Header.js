import React, { useEffect } from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import {useSelector,useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import { selectUserEmail, selectUserName, selectUserPhoto, setUserLoginDetails,setSignOutState } from '../features/user/userSlice';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    const email = useSelector(selectUserEmail);
    const photo = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                setUser(user);
                history.push('/home');
            }
        })
    },[username])

    const handleAuth = ()=>{
        if(!username){
        auth.signInWithPopup(provider)
        .then((result)=>{
            setUser(result.user);     
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }else if(username){
        auth.signOut()
        .then(()=>{
            dispatch(setSignOutState());
            history.push('/');
        })
        .catch((error)=>{
            alert(error);
        })
    }

    }

    const setUser =(user)=>{
        // console.log('Caryig the user: ',user.displayName);
        dispatch(setUserLoginDetails({
            name:user.displayName,
            email:user.email,
            photo:user.photoURL
        }))
    }

    return (
        <Nav>
            <Logo>
                <img src='/images/logo.svg' alt='Disney+'/>
            </Logo>
            {
                !username ? (<Login onClick={handleAuth}>LOGIN</Login>)
                :(
                    <>
                    <NavMenu>
                        <a href='/home'>
                            <img src='/images/home-icon.svg' alt='Home'/>
                            <span>HOME</span>
                        </a>
                        <a href='/home'>
                            <img src='/images/search-icon.svg' alt='Home'/>
                            <span>SEARCH</span>
                        </a>
                        <a href='/home'>
                            <img src='/images/watchlist-icon.svg' alt='Home'/>
                            <span>WATCHLIST</span>
                        </a>
                        <a href='/home'>
                            <img src='/images/original-icon.svg' alt='Home'/>
                            <span>ORIGINALS</span>
                        </a>
                        <a href='/home'>
                            <img src='/images/series-icon.svg' alt='Home'/>
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={photo} alt={username}/>
                        <Dropdown>
                            <span onClick={handleAuth}>Sign out</span>
                        </Dropdown>
                    </SignOut>
                    </>
                )
            }
        </Nav>
    )
}

const Nav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:70px;
    background:#090b13;
    padding:0 36px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    letter-spacing:15px;
    z-index:3;
`
const Logo = styled.a`
    padding:0;
    display:inline-block;
    width:80px;
    max-height:70px;
    margin-top:4px;
    font-size:0;
    img{
        display:block;
        width:100%;
    }
`
const NavMenu = styled.div`
    display:flex;
    align-items:center;
    flex-flow:row nowrap;
    // border:1px solid red;
    height:100%;
    padding:0;
    position:relative;
    margin-right:auto;
    margin-left:25px;
    a{
        // border:1px solid green;
        display:flex;
        align-items:center;
        padding:1px 12px;
        img{
            height:20px;
            min-width:20px;
            width:20px;
            z-index:auto;
            margin-right:5px;
        }
        span{
            letter-spacing:1.42px;
            line-height:1.08px;
            font-size:15px;
            // border:1px solid blue;
            position:relative;
            padding:2px 0;
            position:relative;
            white-space:nowrap;
            color:rgba(249,249,249);
            &:before{
                content:'';
                background-color:rgba(249,249,249);
                color:black;
                height:2px;
                position:absolute;
                bottom:-10px;
                left:0;
                right:0;
                border-radius:5px;
                transform-origin:center;
                transform:scaleX(0);
                opacity:0;
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            }
        }
         &:hover{
            span:before{
                opacity:1;
                transform:scaleX(1);
            }
        }
    }
   

    @media (max-width:768px){
        display:none;
    }
`

const Login = styled.a`
    background:rgba(0,0,0,0.6);
    padding:8px 16px;
    letter-spacing:1.5px;
    border:1px solid white;
    border-radius:4px;
    transition:all 0.2s ease 0s;
    &:hover{
        background:white;
        color:black;
        border:1px solid transparent;
        cursor:pointer;
    }
`
const UserImg = styled.img`
    height:100%;
`
const Dropdown = styled.div`
    position:absolute;
    top:50px;
    right:0;
    background:rgba(19,19,19);
    border:1px solid rgba(151,151,151,0.34);
    border-radius:4px;
    padding:8px 8px;
    letter-spacing:3px;
    opacity:0;
    font-size:14px;
    width:100px;
`
const SignOut = styled.div`
    // border:1px solid red;   
    position:relative;
    width:60px;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:.5s;
    cursor:pointer;
    ${UserImg}{
        border-radius:50%;
        width:100%;
        height:100%;
    }
    &:hover{
        ${Dropdown}{
            opacity:1;
            transition-duration:1s;
        }
    }
`



export default Header
