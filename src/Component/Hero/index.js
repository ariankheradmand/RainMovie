import React from 'react'
import styled from "styled-components"

const HeroBox = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   background: linear-gradient(120deg ,#B2DDFF ,#224B8B);

   width:100%;
   height:256px;

`; 
const HeroSearch = styled.input`
   width: 60%;
   height: 56px;
   cursor: default;
   border-radius: 15px;
   border:0;
   opacity: 80%;
   font-size: 32px;
   color: rgba(0,0,0,.7);
   margin-top: 24px;
   :focus {
       opacity: 90%;
   }
   :hover {
       opacity: 100%;
   }
`;


function index() {
  return (
    <HeroBox>
        <div>Enjoy</div>
      <HeroSearch />
   


    </HeroBox>
  )
}

export default index;