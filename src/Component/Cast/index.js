import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
const Img_box = styled.div`
  min-width: 140px;
  min-height: 220px;
  max-width: 140px;
  max-height: 220px;
  margin-bottom: 15px;
  border-radius: 8px;
  

  box-shadow: 5px 0px 10px 1px black;
  margin: 15px 10px;
`;
const Container = styled.div`
  display:flex;
  align-item:center;
  justify-content:flex-start;
  height:310px;
  width: 80%;
  overflow:auto;
  text-align:center;
  margin-top:80px;
  `;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

function index(props) {
  
    let render = props.list;
    const filterd = render.filter((item) =>{
        return item.profile_path != null;
       
    })
  return (
      
    <Container>{filterd.map((item) => {
       
        return <Img_box><Link to={`/People/${item.id}`}>
        <Img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.profile_path}`}
        ></Img>
        </Link>
        <b>{item.name}</b>
        
      </Img_box>
      
    })}


    </Container>
    
  )
}

export default index