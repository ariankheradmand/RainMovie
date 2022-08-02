import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto ;
  gap: 15px;
  margin-top:86px;
  width:85%;
`;
const Box = styled.a`
  width:220px;
  height:330px;
  background-color:white;
  color:white;
  border-radius:7px;
  overflow:hidden;
  position:relative;
  
`;
const Box_img = styled.img`
`;
const Box_name = styled.div`
  width:100%;
  height:64px;
  background-color:rgba(0, 0, 0, .5);
  text-align:center;
  bottom:0px;
  padding-top:15px;
  font-weight:800;
  color:white;
  text-shadow: 0px 0px 12px white;
  position:absolute;
  z-index:9999;
`
function index(props) {
   
  return<div className='flex-coulmn-center'> 
    <Container>  {props.list.map((item) => {
       
        return <Box href='#'> 
        <Link to={`/People/${item.id}`}>
            <Box_img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.profile_path}`}/>
            <Box_name>{item.name}</Box_name>

            </Link>
        </Box>
         
        


        
 

    })}</Container>
  </div>
}

export default index