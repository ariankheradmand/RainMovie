import React from 'react'
import styled from "styled-components"

const NavBox = styled.div`
   display:flex;
   flex-direction:cloumn;
   align-items:center;
   justify-content:center;

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

function Nav() {
  return (
    <NavBox>
       <div className='half-size flex-row-start'>
           <div className='flex-row-start tree-slice'>
            <NavButtons href='#'>Movies</NavButtons>
            <NavButtons href='#'>TV Shows</NavButtons>
            <NavButtons href='#'>People</NavButtons>
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