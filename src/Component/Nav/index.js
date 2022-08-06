import React from 'react'
import styled from "styled-components"
import { NavLink } from "react-router-dom";

const NavBox = styled.div`

   display:flex;
   flex-direction:cloumn;
   align-items:center;
   justify-content:center;

   position: fixed;
   top: 0;
   z-index: 9999;

   background: linear-gradient(90deg ,#224B8B ,#B2DDFF);
   width: 100%;
   height: 64px;
`; 
const NavButtons = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2em;
  padding: 0px 10px;
`;
const NavCnt = styled.div`
   display:flex;
   flex-direction:cloumn;
   align-items:center;
   justify-content:center;  
   
   width: 33.33333%
`
let activeStyle = {
  textDecoration: "none",
  color: "white",
  
};

function Nav() {
  return (
    <NavBox>
       <div className='half-size flex-row-start'>
           <div className='flex-row-start tree-slice'>
            <NavButtons href='#'>
            <NavLink
            to="/"
            style={(values) => {
            return values.isActive ? activeStyle : undefined;
            }}
            >
            Movies
            </NavLink>
              </NavButtons>
            <NavButtons href='#'>TV Shows</NavButtons>
            <NavButtons href='#'>
            <NavLink
            to="/People"
            style={(values) => {
            return values.isActive ? activeStyle : undefined;
            }}
            >
            People
            </NavLink></NavButtons>
            <NavButtons href='#'>More</NavButtons>
           </div>

           <div className='tree-slice flex-row-center' style={{fontSize: '50px' , color: 'white'}}>
               <div className='white'>L</div>
               <div className='black'>O</div>
               <div className='white'>G</div>
               <div className='black'>O</div>
            </div>
          
           <div className='flex-row-end tree-slice'>
             <NavButtons  href='#'>Login</NavButtons>
             <NavButtons href='#'>Join RainMovies</NavButtons>

           </div>

       </div>

    </NavBox>
  )
}

export default Nav;