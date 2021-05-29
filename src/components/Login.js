import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='/images/cta-logo-one.svg' alt=''/>
                    <Signup>Get all there</Signup>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
                </CTA>
                <BgImg/>
            </Content>
        </Container>
    )
}

const Container = styled.section `
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    // border:1px solid red;
    height:100vh;
`

const Content = styled.div `
    display:flex;
    // border:1px solid blue;
    justify-content:center;
    margin-bottom:10vw;
    min-height:100vh;
    position:relative;
    align-items:center;
    flex-direction:column;
    padding:80px 40px;
    height:100%;
`
const BgImg = styled.div`
    background:url('/images/login-background.jpg');
    position:absolute;
    top:0;
    left:0;
    right:0;
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:top;
    z-index:-1;
`
const CTA = styled.div`
    display:flex;
    flex-direction:column;
    // border:1px solid green;
    max-width:650px;
    flex-wrap:wrap;
    justify-content:center;
    width:100%;
    margin-top:0;
    margin-left:auto;
    margin-right:auto;
    align-items:center;
    text-align:center;
    transition-timimg-function:ease-out;
    transition:opacity 0.2s;
`

const CTALogoOne = styled.img`
    margin-bottom:12px;
    // border:1px solid red;
    max-width:600px;
    min-height:10px;
    display:block;
    width:100%;
`
const Signup = styled.a`
    border:1px solid blue;
    width:100%;
    max-width:600px;
    margin-bottom:12px;
    text-transform:uppercase;
    font-size:18px;
    font-weight:bold;
    background-color:#0063e5;
    width:100%;
    letter-spacing:1.5px;
    padding:16.5px 0;
    // border:1px solid transparent;
    border-radius:4px;

    &:hover{
        background:#0483ee;
        cursor:pointer;
    }
`
const Description = styled.p`
    color:hsla(0,0%,95.3%,1);
    font-size:12px;
    margin:0 0 24px;
    line-height:1.5;
    letter-spacing:1.5px;
    max-width:600px;
    text-align:center;
`

const CTALogoTwo = styled.img`
    max-width:600px;
    width:100%;
    margin-bottom:20px;
    vertical-align:bottom;
    display:inline-block;
`

export default Login;
